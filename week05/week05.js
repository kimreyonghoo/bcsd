const btn=document.createElement(`button`);
const $body=document.querySelector(`body`);
$body.appendChild(btn);
btn.textContent="클릭해주세요";
const eventWindow=document.createElement('div');


eventWindow.textContent=`좋은 교육 감사드립니다.`;

function a(){
    $body.appendChild(eventWindow);
    eventWindow.className=`eventWindow`;
}
btn.addEventListener(`click`,a);
