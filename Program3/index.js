var box = document.querySelector('#box h1');
var btn = document.querySelector('button');


var teams = ['RCB','KKR','PBKS','CSK','MI','GJ','RJ','SRH'];

btn.addEventListener('click',function(){
  var random = Math.floor(Math.random()*teams.length);
  box.innerHTML=teams[random];
})