(async function load(){
    await new Promise(resolve=> setTimeout(()=> resolve(), Math.random()*1500))
    document.querySelector("#load").innerHTML="";
})()

const qs = (id)=> document.querySelector(id)
const qsv = (id)=> document.querySelector(id).value;
const setv = (id,value)=> document.querySelector(id).value = value;
const qsi = (id,value)=> document.querySelector(id).innerHTML = value;

let i=1;
const theme = ()=> (i===0) ?
(()=>{document.body.style.backgroundColor = '#d6d4d4';i++})():
(()=>{document.body.style.backgroundColor = '#000000';i--})()