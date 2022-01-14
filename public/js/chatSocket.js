let nameBut = document.querySelector("#nameBut");
let chatBut = document.querySelector("#chatBut");
var socket = io();
socket.on('chat message', (msg) => {
  let out = document.querySelector("#out");
  out.innerHTML = `<div> <span class = "width50">${msg.name}</span> <span> : ${msg.message} </span> </div>` + out.innerHTML;
  console.log('message: ' + msg);
});


sessionStorage.setItem('nameUser',sessionStorage.getItem('nameUser') || prompt("What is your name?"));
chatBut.addEventListener("click", async () => {
  let chatIn = document.querySelector("#chatIn");
  socket.emit('chat message',{name : sessionStorage.getItem('nameUser'), message : chatIn.value});
});