//select
const btnPlusOne=document.querySelector('#btn-plus-1');
const inputValueOne=document.querySelector('#input-value-1');
const btnMinusOne=document.querySelector('#btn-minus-1')
const totalOne=document.querySelector('#total-1');
const btnPlusTwo=document.querySelector('#btn-plus-2');
const btnMinusTwo=document.querySelector('#btn-minus-2');
const inputValueTwo=document.querySelector('#input-value-2');
const totalTwo=document.querySelector('#total-2');


//addeventlistener-1
btnMinusOne.addEventListener('click',function(){
    const inputValueOne=document.querySelector('#input-value-1').value;
    const inputValueOneNumber=parseInt(inputValueOne);
    const newInputValue=inputValueOneNumber-1;
    document.querySelector('#input-value-1').value=newInputValue;
    const newTotalOne=newInputValue*1219;
    document.querySelector('#total-1').innerText=newTotalOne;
    if(newInputValue<1){
        document.querySelector('#input-value-1').value=0;
        document.querySelector('#total-1').innerText=0;
    }
    total()
})

btnPlusOne.addEventListener('click',function(){
    const inputValueOne=document.querySelector('#input-value-1').value;
    const inputValueOneNumber=parseInt(inputValueOne);
    const newInputValue=inputValueOneNumber+1;
    document.querySelector('#input-value-1').value=newInputValue;
    const newTotalOne=newInputValue*1219;
    document.querySelector('#total-1').innerText=newTotalOne;
    total()
})
//addeventlistener-2
btnMinusTwo.addEventListener('click',function(){
    const inputValueTwo=document.querySelector('#input-value-2').value;
    const inputValueTwoNumber=parseInt(inputValueTwo);
    const newInputValueTwo=inputValueTwoNumber-1;
    document.querySelector('#input-value-2').value=newInputValueTwo;
    const newTotalTwo=newInputValueTwo*59;
    document.querySelector('#total-2').innerText=newTotalTwo;
    if(newInputValueTwo<1){
        document.querySelector('#input-value-2').value=0;
        document.querySelector('#total-2').innerText=0;
    }
    total()
})


btnPlusTwo.addEventListener('click',function(){
    const inputValueTwo=document.querySelector('#input-value-2').value;
    const inputValueTwoNumber=parseInt(inputValueTwo);
    const newInputValueTwo=inputValueTwoNumber+1;
    document.querySelector('#input-value-2').value=newInputValueTwo;
    const newTotalTwo=newInputValueTwo*59;
    document.querySelector('#total-2').innerText=newTotalTwo;
    total()

})

function total(){
    //tax
    const num1=document.querySelector('#total-1').innerText;
    const num2=document.querySelector('#total-2').innerText;
    const newTax=parseFloat(num1)+parseFloat(num2)
    const totalTax=(newTax*5)/100;
    document.querySelector('#tax').innerText=Math.round(totalTax);
    //subtotal
    document.querySelector('#subTotal').innerText=newTax;
    //total
    document.querySelector('#total').innerText=Math.round(newTax+totalTax);
}
const checkOut=document.querySelector('.check-out');
checkOut.addEventListener('click',function(){
    const hidden=document.querySelector('#hidden').style.display='none';
    document.querySelector('#success').style.display='block';
})