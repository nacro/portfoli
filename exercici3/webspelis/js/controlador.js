function play(){
    document.getElementById("video").play();
}
function pausa(){
    document.getElementById("video").pause();
}
function reload(){
    document.getElementById("video").currentTime= 0;
    document.getElementById("video").pause();
}
function retorn(){
    document.getElementById("video").currentTime += -10;
}
function endevant(){
    document.getElementById("video").currentTime += 10;
}
function MesVolum(){
    /*if(document.getElementById("video").volume >0)*/
    document.getElementById("video").volume += 0.1;
}
function MenysVolum(){
   /* if(document.getElementById("video").volume <0)*/
    document.getElementById("video").volume += -0.1;
}
function Mute(){
    document.getElementById("video").volume = 0;
}
