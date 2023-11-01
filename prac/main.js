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