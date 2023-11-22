const $btnCom=document.getElementsByClassName(`btncom`);
const $btnUser=document.getElementsByClassName(`btnuser`);

let winCount=0;
let loseCount=0;
let drawCount=0;

const $wincount=document.querySelector(`.winCount`);
const $losecount=document.querySelector(`.loseCount`);
const $drawcount=document.querySelector(`.drawCount`);

function judge(event){
    let comSelect=Math.floor(Math.random()*3);
    if (event.target===$btnUser[0]){
        console.log(comSelect);
        if(comSelect===0){
            drawCount++;
            $drawcount.textContent=`draw${drawCount}`;
        }
        else if(comSelect===1){
            winCount++;
            $wincount.textContent=`win${winCount}`;
        }
        else {
            loseCount++;
            $losecount.textContent=loseCount;
        }
    }
    else if (event.target===$btnUser[1]){
        console.log(comSelect);
        if(comSelect===0){
            loseCount++;
            $losecount.textContent=loseCount;
        }
        else if(comSelect===1){
            drawCount++;
            $drawcount.textContent=`draw${drawCount}`;
        }
        else {
            winCount++;
            $wincount.textContent=`win${winCount}`;

        }
    }
    else{
        console.log(comSelect);
        if(comSelect===0){
            winCount++;
            $wincount.textContent=`win${winCount}`;
        }
        else if(comSelect===1){
           
            drawCount++;
            $drawcount.textContent=`draw${drawCount}`;
        }
        else {
            loseCount++;
            $losecount.textContent=`lose${loseCount}`;
        }
    }
}

for(let i=0;i<3;i++){
    $btnUser[i].addEventListener(`click`,judge);
}