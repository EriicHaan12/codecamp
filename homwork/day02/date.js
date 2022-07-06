// 1. 현재 날짜와 시간을 출력하는 함수를 하나 만들고, 
// 해당 함수를 실행하면 **`현재 시간`**으로 
// (예시: “오늘은 2022년 03월 15일 11:30:29입니다.”) 
// 같은 포맷의 메시지가 콘솔에 출력되도록 만들어 주세요.



function getToday() {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2,'0')
    const dd = date.getDate()
    const hh= date.getHours();            
    const min = date.getMinutes();          
    const sec = String(date.getSeconds()).padStart(2,'0');          

    console.log(`오늘 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${min}:${sec} 입니다.`) 
        
}
getToday()
