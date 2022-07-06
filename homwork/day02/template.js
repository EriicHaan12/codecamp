// 2. 회원가입을 축하하는 형태의 템플릿을 출력하는 함수를 만들어 주세요.

//  **이메일**, **주민번호**, **휴대폰 번호**, **내가 좋아하는 사이트**를 
// 함수의 입력으로 받고, 해당 내용이 html 태그가 포함된 텍스트로 콘솔에 출력되어야 합니다.




function getWelcomeTemplate({eMail, arrNumber, cellPhone, site }) {
    return `
          <html>
              <body>
                  <h1>코드캠프님 가입을 환영합니다.</h1>
                  <hr />
                  <div>이메일: ${eMail}</div>
                  <div>주민번호: ${arrNumber}</div>
                  <div>휴대폰 번호: ${cellPhone}</div>
                  <div>내가 좋아하는 사이트: ${site}</div>
              </body>
          </html>
      `;
  }
  
 

    const eMail = 'support@codebootcamp.co.kr'
    const arrNumber = '210510-1******'
    const cellPhone = '010-1234-5678'
    const site = 'www.naver.com'
  
    const welcome={
        eMail, arrNumber, cellPhone,site
    }

    const result = getWelcomeTemplate({eMail, arrNumber, cellPhone, site });
    console.log(result);