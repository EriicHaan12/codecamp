// import mongoose from "mongoose";


export function customRegistrationNumber(myRgis){  
   
        const hyp = myRgis.split('-',2);
       
        const RgisNumber = myRgis.split('');
    
        if(hyp[0].length!==6 || hyp[1].length!==7){ 
                console.log('에러 발생!! 형식이 올바르지 않습니다!!'); return
                }
           
        else if (RgisNumber[6] !== '-'){ 
                console.log('에러 발생!! 형식이 올바르지 않습니다!!');  return; 
                }
             
      
        const MyRgis2 = RgisNumber.splice(0,7); 
        const masking = '*******'
        const masking2 = masking.split('') 
        const regisMask =MyRgis2 + ',' + masking2
       
       
        const result = regisMask.replace(/,/g,'')
      
        return result
    }