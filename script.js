let lucheight= 1.69;
let lucweight=78;
let petheight=1.95;
let petweight=92;

let lucasBmi= lucweight/(lucheight*lucheight);
let peterBmi= petweight/(petheight*petheight);

let lbmi= document.querySelector('.lbmi');
let pbmi= document.querySelector('.pbmi');
boolbmi=document.querySelector('.boolbmi');

lbmi.innerHTML=lucasBmi.toFixed(2);
pbmi.innerHTML=peterBmi.toFixed(2);

if (lucasBmi > peterBmi){
    let lucasHigherBMI=false;
    boolbmi.innerHTML=lucasHigherBMI;

// template literal assignment

    const logBMI= `Lucas' BMI ${lucasBmi.toFixed(2)} is higher than Peter's ${peterBmi.toFixed(2)}!` 
    console.log(logBMI);
}

// Custom BMI

let hInput= document.querySelector('.hInput');
let wInput= document.querySelector('.wInput');
let bmiOutput=document.querySelector('.bmiOutput');



let cBtn= document.querySelector('.cBtn');

cBtn.addEventListener('click', bmiC);


function bmiC(){
    let height= parseFloat(hInput.value);
    let weight= parseFloat(wInput.value);
    let bmi= weight / (height*height);

    bmi=bmi.toFixed(2);
    bmiOutput.innerHTML= bmi;
    
   
}




// Temperature Assignments


let cel1= 20;
let fConv1= ((9/5)*cel1)+ 32;
let fah1=41;
let cConv1= (fah1-32)*(5/9);
const fConvlog= `${cel1}°C is ${fConv1}°F`;
const cConvlog=`${fah1}°F is ${cConv1}°C`;

console.log(fConvlog);
console.log(cConvlog);


let ConvertCelsiusToFahrenheit = (cel2) => {
    let fah2 = ((9/5)*cel2)+ 32
    fah2 = fah2.toFixed(1)
    console.log(`${cel2}°C is ${fah2}°F`)

};
ConvertCelsiusToFahrenheit(100)
ConvertCelsiusToFahrenheit(0)
ConvertCelsiusToFahrenheit(10)

let ConvertFahrenheitToCelsius = (fah3) => {
    let cel3= (fah3-32)*(5/9)
    cel3 = cel3.toFixed(1);
    console.log(`${fah3}°F is ${cel3}°C`)
}
ConvertFahrenheitToCelsius(32)
ConvertFahrenheitToCelsius(10)
ConvertFahrenheitToCelsius(102)
