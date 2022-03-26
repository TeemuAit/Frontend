

console.log('Hello World');

const btn = document.createElement('button');
btn.innerText = 'Ruokavalio';

function changeColor(obj){
    obj.style.color = "Peru";
}

document.getElementById("Contact").onclick = changeBackGroundColorToMediumOrchid;

function changeBackGroundColorToMediumOrchid(){
    document.querySelector('body').style.background = "MediumOrchid";
}
