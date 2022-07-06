// const { checkValidationPhone, getToken, sendTokenToSMS } = require("./phone.js")
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'


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




  





// true 문자열, 숫자, 띄어쓰기 
// false "", 0 






// const { checkValidationPhone, getToken, sendTokenToSMS } = require("./phone.js")
// 옛날 방식