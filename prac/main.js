function pow(x,y){
    let result=x;
    for (let i=1;i<y;i++){
        result*=x;
    }
    return result;
}
let x=prompt("얼마",)
let y=prompt("얼마",);
alert(pow(x,y));

let func=pow;
alert(func(x,y));
let ask=(question, yes, no)=> confirm(question)? yes():no();

ask(
  "동의하십니까?",
  ()=>alert("동의하셨습니다."),
  ()=>alert("취소 버튼을 누르셨습니다.")
);
const city1=`seoul`;
const city2=`London`;
const city3=`paris`;
console.log(`저는 ${city1}에 살아요`);
console.log(`저는 ${city2}에 살아요`);
console.log(`저는 ${city3}에 살아요`);

console.log(`Hi`);
setTimeout(function cb(){
  console.log(`there`)},5000);
console.log(`JSconfEU`);

