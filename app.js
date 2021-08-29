var inputtxt=document.querySelector('#input');
var translatebtn=document.querySelector('#btn-translate');
var output=document.querySelector('#output')
translatebtn.addEventListener('click',function(){
    translate(inputtxt.value);
});
async function translate(text)
{
    var config={ params: {text:text} }
    var res= await axios.get("https://api.funtranslations.com/translate/minion",config);
    output.innerText=res.data.contents.translated
}
