var inputtxt=document.querySelector('#input');
var translatebtn=document.querySelector('#btn-translate');
var output=document.querySelector('#output')
translatebtn.addEventListener('click',function(){
    output.innerText=inputtxt.value;
});