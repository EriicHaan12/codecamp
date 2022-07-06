function getToken(){

    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth()+1
    const dd= aaa.getDate()
    const today = ` ${yyyy}-${mm}-${dd}`
    return today

}
console.log(today)


// new Date()
// Tue Jul 05 2022 18:34:50 GMT+0900 (Korean Standard Time)
// const aaa = new Date()
// undefined
// aaa.getFullYear
// ƒ getFullYear() { [native code] }
// aaa.getMonth
// ƒ getMonth() { [native code] }
// aaa.getFullYear()
// 2022
// aaa.getMonth()
// 6
// aaa.getMonth()+1
// 7