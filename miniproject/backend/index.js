import express from "express";
import cors from "cors";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {checkValidationEmail,getWelcomeTemplate,sendTemplateToEmail,} from "./email.js";
import mongoose from "mongoose";
import { SaveToken } from "./models/tokens.model.js";
import { Userdata } from "./models/user.model.js";
import { getOpenGraph } from "./cheerio.js";
import {customRegistrationNumber} from "./customRegistrationNumber.js"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import { Starbuck } from "./models/starbucks.model.js";
// import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
// const swaggerDocument = require('./swagger.json');
app.get('/starbucks',async(req,res)=>{

const coffeeFind = await Starbuck.find()
res.send(coffeeFind)
})
app.post("/user", async(req,res)=>{

  const { name, email, personal, prefer, pwd, phone } = req.body
  const mypersonal = customRegistrationNumber(personal)
  
  const result = await SaveToken.findOne({ phone:phone });
  const GetOpenGraph = await getOpenGraph(prefer)
  const sendEmail = await sendTemplateToEmail(email)
  
  
  if(result===null||result.isAuth===false ){
    
    res.status(422).send("에러!! 핸드폰 번호가 인증되지 않습니다.")
    console.log(result)
    
  }
  
  else {  
  const userData = new Userdata({
    
    og: GetOpenGraph,
    name:name,
    email:sendEmail,
    personal:mypersonal,
    prefer:prefer, 
    pwd: pwd, 
    phone: phone,
    
    
  })
  
  await userData.save() 

  res.send("회원가입이 완료되었습니다")
}
  
  
  
  }
)


app.post("/tokens/phone", async (req, res) => {
  
  
  const myphone = req.body.phone;

  const resultPhone = checkValidationPhone(myphone);
  if (resultPhone === false) {
    return;
  }
  const mytoken = getToken();
  sendTokenToSMS(myphone, mytoken)
  const result = await SaveToken.findOne({ phone: myphone });
  if (result !== null) {
    await SaveToken.updateOne({ phone: myphone }, { token: mytoken });
  } else {
    const Savetoken = new SaveToken({
      token: mytoken,
      phone: myphone,
      isAuth: false,
    });
    await Savetoken.save();
  }
  res.send("휴대폰으로 인증번호를 전송합니다.");
});
app.get("/users", async (req, res) => {
  const findUser = await Userdata.find();

  res.send(findUser);
});

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = req.body.token;
  const findToken = await SaveToken.findOne({ phone: myphone });
  if (findToken !== null) {
    await SaveToken.updateOne({ token: mytoken }, { isAuth: true });
    res.send("인증완료");
  } else {
    res.send(false);
  }
});

mongoose.connect("mongodb://my-database:27017/myproject04");

app.listen(3001, () => {
  console.log("서버를 켜는데 성공했어요.");
});
