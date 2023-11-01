const $pwcheck=document.querySelector(".pw-check");
const $pw=document.querySelector(".pw");
const $idpwField=document.querySelector(".idpwField");
const wrongMessage=document.createElement("p");
$idpwField.appendChild(wrongMessage);
wrongMessage.textContent=`Not Matched!`;
wrongMessage.style.color="red";

function pwConfirm(){
    if($pwcheck.value===$pw.value){
        wrongMessage.textContent=`Matched!`;
        wrongMessage.style.color="green";
    }
}

$pwcheck.addEventListener("change",pwConfirm);
