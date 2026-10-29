function hearts(amount=15){
  const emojis=["💖","💗","💕","✨","🌸","🦋"];

  for(let i=0;i<amount;i++){
    const el=document.createElement("div");
    el.className="heart";
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left=Math.random()*95+"vw";
    el.style.animationDuration=(1.5+Math.random()*2)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3500);
  }
}

function reveal(id){
  const el=document.getElementById(id);
  if(!el)return;
  el.classList.toggle("show");
  if(el.classList.contains("show"))hearts(12);
}

function finalSurprise(){
  hearts(50);
  document.querySelectorAll(".secret").forEach(el=>{
    el.classList.add("show");
  });
}

function showToast(message){
  const el=document.getElementById("toast");
  if(!el)return;
  el.textContent=message;
  el.style.display="block";
  setTimeout(()=>el.style.display="none",2500);
}
