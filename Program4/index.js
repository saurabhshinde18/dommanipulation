
var img1 = document.getElementById('img1');
var img2= document.getElementById('img2');
var button = document.querySelector('button');

button.addEventListener('click',function(){
  var imgvalue1= img1.getAttribute('src');
  var imgvalue2 =img2.getAttribute('src');
  img1.setAttribute('src',imgvalue2);
  img2.setAttribute('src',imgvalue1);
})