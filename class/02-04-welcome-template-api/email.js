import {getToday} from "./util.js"

export function checkValidationEmail(myemail){

    if(myemail === undefined || myemail.includes('@') ===false){

        console.log("에러 발생!!! 이메일을 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}


import function getWelcomeTemplate({name, age, school, createdAt})
{


    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm =aaa.getMonth()+1
    const dd= aaa.getDate()
    const today = ` ${yyyy}-${mm}-${dd}`

    
    const mytemplate = `
    <html>
    
        <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
            <div>이름: ${name}</div>
            <div>나이: ${age}살</div> 
            <div>학교: ${school}</div>
            <div>가입일:${getToday}</div>
    
        </body>
    
    </html>
    ` 
    return mytemplate 
    // console.log(mytemplate)
}


function sendTemplateToEmail(myemail, result){

    (console.log(myemail + "주소로 가입환영 템플릿" + result + "을 전송합니다!!!"))
}

// 월을 표기할때 7월을 07월 로 표기 하고 싶으면 string으로 문자열로 만든뒤 
// padStart 를 써서 만들수 있다