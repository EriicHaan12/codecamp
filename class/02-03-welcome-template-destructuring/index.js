const apple=3
const banana= 2

console.log ('철수는 사과를' + apple+ '개,'+'바나나를'+banana+'개 가지고 있습니다')
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`)

function getWelcomeTemplate({name, age, school, createdAt}){

const mytemplate = `
<html>

    <body>
    <h1>${name}님 가입을 환영합니다!!!</h1>
    <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}</div> 
        <div>학교: ${school}</div>
        <div>가입일:${createdAt}</div>

    </body>

</html>
`
console.log(mytemplate)
}

const myname ='영희'
const myage = 12
const myschool = '토끼초등학교'
const mycreatedAt ="2020-01-01"
getWelcomeTemplate({name, age,createdAt})









const aaa={

    apple: 3,
    banana:10,
    money: 1000    
    }
    undefined
    const apple = aaa.apple
    undefined
    const {banana, money}= aaa
    undefined
    banana
    10
    money
    1000
    const {} = {name: '철수', age: 12}
    undefined
    const {name, Image} = {name: '철수', age: 12}
    undefined
    name
    '철수'
    age
    VM960:1 Uncaught ReferenceError: age is not defined
        at <anonymous>:1:1
    (anonymous) @ VM960:1
    const {name, age} = {name: '철수', age: 12}
    undefined
    age
    12


    const [friend1, friend2, qqq]= ['철수','영희','훈이']
undefined
friend1
'철수'
friend2
'영희'
qqq
'훈이'
const bbb= [10, 20, 1000]
undefined
const [apple, banana, money]= bbb
undefined
apple
10
banana
20
money
1000
bbb
(3) [10, 20, 1000]


function getChild(){
    return{
        name: '철수',
        age: 13, 
        school :'다람쥐초등학교'
    }
}
undefined
getChild()
{name: '철수', age: 13, school: '다람쥐초등학교'}
const aaa = getChild()
undefined
aaa
{name: '철수', age: 13, school: '다람쥐초등학교'}
const {name, age, school}= getChild()
undefined
school
'다람쥐초등학교'
name
'철수'
age
13



const {}={name:'영희', age:7, school:'토끼초등학교'}
undefined
age
VM2886:1 Uncaught ReferenceError: age is not defined
    at <anonymous>:1:1
(anonymous) @ VM2886:1
영희
VM2901:1 Uncaught ReferenceError: 영희 is not defined
    at <anonymous>:1:1
(anonymous) @ VM2901:1
const{age}=child
undefined
age
7
console.log{age)





    function qqq({ apple, banana }){
        // const { apple, banana } = basket
    
    }
    
    const basket = {
        apple: 3,
        banana: 10
    }
    qqq(basket)



    function qqq({ name, age, school }){

    }
    
    const name = "철수"
    const age = 13
    const school = "다람쥐초등학교"
    qqq({ name, age, school })
    
    
    
    
    function qqq(name, age, school){
    
    }
    
    const name = "철수"
    const age = 13
    const school = "다람쥐초등학교"
    qqq(name, school)
    // 기존에 중괄호를 쓰기전에는 qqq함수에 name, age, school 중 age 가 빠져버리면 순서대로만 작동되어 
    // school에 age 값이 밀려 쓰여 졌지만, 중괄호로 묶으면 객체로써 key 값을 찾아가기 떄문에 지우더라도 객체명을 보고 알아서 찾아간다.