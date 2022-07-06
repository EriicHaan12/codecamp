
function ustomRegistrationNumber(count) {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    if (myphone.length !== 12 && myphone.length !== 13 {
      console.log(”에러 발생!!! 개수를 제대로 입력해 주세요!!!”);
      return;
    }
  
    
    if (count === undefined) {
      console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
      return;
    } else if (count <= 0) {
      console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
      return;
    } else if (count > 13) {
      console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
      return;
    } else if (count < 12) {
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
        return;
    }
    
    const result = String()