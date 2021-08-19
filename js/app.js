// function getPin(){
//     const pin = Math.round(Math.random() * 10000);
//     const pinText = pin + '';
//     if(pinText.length == 4){
//         return pin;
//     }
// else{
//     return getPin();
// }
// }
// function generatePin(){
//     const pin = getPin();
//     document.getElementById('display-pin').value = pin;
// }

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + '';
    if(pinText.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// document.getElementById('key-pad').addEventListener('click', function(event){
//     const number = event.target.innerText;
    
//     const typenumber =document.getElementById('type-pin');
//     if(isNaN(number)){
//         if(number == 'C'){
//              typenumber.value = '';
//         }
//     }
// else{
//     const calcuInput = typenumber.value;
//     const previusCalcu = calcuInput + number;
//     typenumber.value = previusCalcu;
// }

// })
// function typePin(){
//     const pin = document.getElementById('display-pin').value;
//     const typePin = document.getElementById('type-pin').value;

//     if(pin == typePin){
//         console.log('okay')
//     }
//     else{
//         console.log('please reenterd your pin number ')
//     }
// }

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calcuInput = document.getElementById('type-pin');
   if(isNaN(number)){
       if(number == 'C'){
           calcuInput.value = '';
       }
   }
 else{
    const calcuInputText =  calcuInput.value;
    const previusCalcu = calcuInputText + number;
    calcuInput.value = previusCalcu  
 }
})
function typePin(){
    const pin = document.getElementById('display-pin').value;
    const typePin = document.getElementById('type-pin').value;
    
    const notifyError = document.getElementById('notify-error');
    
    const notifysuccess = document.getElementById('notify-success');
    if(pin == typePin){
        notifysuccess.style.display = 'block'
        
        notifyError.style.display = 'none'
        
    
    }
    else{
        notifysuccess.style.display = 'none'
        notifyError.style.display = 'block'
    }
}



