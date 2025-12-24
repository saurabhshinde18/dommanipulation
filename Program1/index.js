var box = document.querySelector('#box');
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var btn = document.querySelector('button');
var flag =0;

btn.addEventListener('click',function(){
    if(flag==0){
      p.innerHTML='friends';
      p.style.color="red";
      btn.innerHTML='remove friends';
      flag=1;
    }
    else{
      p.innerHTML='stranger';
      btn.innerHTML='add friend';
      p.style.color="green";
      flag=0;
    }
})