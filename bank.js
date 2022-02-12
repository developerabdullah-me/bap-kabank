document.getElementById('diposit-btn').addEventListener('click', function(){
 const inputDiposit=document.getElementById('input-Diposit');
 const inputFildText= inputDiposit.value;
 const inputFild= parseFloat(inputFildText);
//  console.log(inputFild)
const newDiposit=document.getElementById("new-diposite");
  const newDiposittext=newDiposit.innerText;
  const newDiposited=parseFloat(newDiposittext)+ inputFild;
newDiposit.innerText=newDiposited;

//   secend
const balanceDepo=document.getElementById('balance-depo');
const balanceDepoText=balanceDepo.innerText;
const balanceDeposit=parseFloat(balanceDepoText);
const totalBalanceDepo=balanceDeposit + inputFild;
balanceDepo.innerText=totalBalanceDepo;
// clear 
inputDiposit.value="";
})
document.getElementById('withdraw-btn').addEventListener('click',function (){
const inpitWithdraw=document.getElementById('input-withdraw');
const inputfild=inpitWithdraw.value;
const input= parseFloat(inputfild);
console.log(input);

// secend
const withdraw=document.getElementById('withdraw-now');
const withdrawText= withdraw.innerText;
const totalwithdraw= parseFloat( withdrawText);
const priviusWthdraw= totalwithdraw+ input;
withdraw.innerText=priviusWthdraw;

// third
const w=document.getElementById('balance-depo');
const fl= w.innerText;
const f=parseFloat(fl);
const m= f-input;
w.innerText=m;


// clear
inpitWithdraw.value='';
})