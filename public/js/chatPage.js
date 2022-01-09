let nameBut = document.querySelector("#nameBut");
let chatBut = document.querySelector("#chatBut");

sessionStorage.setItem('nameUser',sessionStorage.getItem('nameUser') || prompt("What is your name?"));

chatBut.addEventListener("click", async () => {
  let chatIn = document.querySelector("#chatIn");
  let response = await fetch('/chatPg/Message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({name : sessionStorage.getItem('nameUser'), message : chatIn.value})
  });
  inOut();

});

inOut();
async function inOut(){
  let response = await fetch('/chatPg/Messages');
  let Messages = await response.json();
  Messages = Messages.reverse();
 
  let out = document.querySelector("#out");
  out.innerHTML = Messages.map( (m) => `<div> <span class = "width50">${m[0]}</span> <span> : ${m[1]} </span> </div>`).join("");
}
setInterval(() => {
  inOut();
}, 1000);
