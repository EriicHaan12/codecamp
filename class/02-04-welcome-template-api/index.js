function createUser({name, age, school, email}){

}

const name= '철수'
const age= 8
const school = '다람쥐초등학교'
const email = ;a@a.com;

clearUser()
// 1. 이메일이 정상인지 확인 (1-존재여부,  2.'@' 포함 여부)
// 2. 가입 환영 템플릿 만들기

const mytemplate= getWelcomeTemplate ({name, age, school})
// 3. 이메일에 가입환영 템플릿 전송하기

sendTemplateToEmail(email, mytemplate)

import { checkValidationEmail, getWelcomeTemplate } from 


console.log("안녕하세요!!")

function createTokenOfPhone(myphone){
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid === false){
        return
    }

    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken()

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken)
}

createTokenOfPhone("01012345678")
