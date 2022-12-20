function turnCvv(){
    var backCard=document.getElementById("back-card");
    var frontCard=document.getElementById("front-card");
    
    backCard.style.transform="rotateY(-360deg)";
    frontCard.style.transform="rotateY(180deg)";
    frontCard.style.opacity="0";
    backCard.style.opacity="1";
}
function outCvv(){
    var backCard=document.getElementById("back-card");
    var frontCard=document.getElementById("front-card");
    backCard.style.transform="rotateY(-180deg)";
    frontCard.style.transform="rotateY(0deg)";
    frontCard.style.opacity="1";
    backCard.style.opacity="0";

}

function getInput(girilenId,degisenId){
var girilen=document.getElementById(girilenId);
var leng=String(girilen.value).length;
var degisen=document.getElementById(degisenId);


var child=degisen.children;

if(leng==0){
    child[0].innerHTML="#";
}
else if(leng<5){
child[leng-1].innerHTML=String(girilen.value).slice(-1);
}
else if(leng<13){
    child[leng-1].innerHTML="*";
}
else{
child[leng-1].innerHTML=String(girilen.value).slice(-1);
}
if(leng<16){
child[leng].innerHTML="#";
}

for(i=0; i<leng; i++){
    if(leng==0){
    child[i].style.top="5px";
    child[i].style.padding="3px";
}
else if(leng<5){
    child[i].style.top="5px";
    child[i].style.paddingLeft="2px";
}
else if(leng<13){
    child[i].style.top="5px";
    child[i].style.paddingLeft="1px";
}
else{
    child[i].style.top="5px";
    child[i].style.paddingLeft="1px";
}
if(leng<16){
    child[i].style.top="5px";
    child[i].style.paddingLeft="2px";
}    
}

for(i=15; i>=0; i--){
 if(child[i].innerHTML=="#"){
    child[i].style.top="15px";
    child[i].style.padding="0px";


}
}







}

function selectMonth(m1,m2){
    var month=document.getElementById(m1).value;
    var mn=document.getElementById(m2).innerHTML=month;
}
function selectYear(y1,y2){
    var year=document.getElementById(y1).value;
    var yn=document.getElementById(y2).innerHTML=year;
}
function writeNumber(girilenId,degisenId){
    var girilen=document.getElementById(girilenId);
    var degisen=document.getElementById(degisenId);
    degisen.innerHTML=girilen.value;
}
function nameText(girilenId,degisenId){
    var girilen=document.getElementById(girilenId);
    var degisen=document.getElementById(degisenId);
    degisen.innerHTML=girilen.value;

}
