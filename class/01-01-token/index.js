console.log("안녕하세요!")

function getToken(aaa){

    const result = String(Math.floor(Math.random()*10**aaa)).padStart(aaa, "0")
    console.log(result)
}

getToken(3)

getToken(10)

getToken(0)



console.log("안녕하세요!")

function getToken(aaa){

    if(aaa===undefined){
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!')
        return
    } else if(aaa<=0){
        console.log('에러 발생!! 갯수가 너무 적습니다!!')
        return
    }else if(aaa>10){
       console.log('에러 발생!! 갯수가 너무 많습니다!!')
        return
    }
    


    const result = String(Math.floor(Math.random()*10**aaa)).padStart(aaa, "0")
    console.log(result)
}


// undefined
// null





if(myphone.length !== 10 && myphone.length !== 11){
    console.log('에러 발생!! 핸드폰 번호를 제대로 입력해 주세요!!')
        return
