const h=document.getElementById('toli');
const b=document.getElementById('add');

const intext=document.getElementById(`inputtext`);
const adding=()=>{
    const added=document.createElement('li');
    const txt=document.createElement(`span`);
    console.log(intext.value);
    txt.textContent=intext.value;
    console.log(txt.textContent);
    const del=document.createElement('button');
    const com=document.createElement(`button`);
    del.innerText="삭제"
    del.className="btn"
    com.innerText="완료"
    com.className="btn"
    h.appendChild(added);
    added.appendChild(txt);
  
    added.appendChild(del);
    added.appendChild(com);
    del.addEventListener('click',()=>h.removeChild(added));
    com.addEventListener(`click`,()=>added.style.textDecoration=`line-through`);
}

const getvalue=()=>{
    intext.innerText;
}

b.addEventListener("click",adding);

