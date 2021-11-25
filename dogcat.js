img="";
status1="";
objects = [] ;
function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";              
}
function draw(){
image(img ,0,0,640,420);
if(status1!=""){
    for(i=0;i<objects.length; i++){
        document.getElementById("status").innerHTML="status:object detected";
        fill("#73ffe3");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ ""+ percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#d61a65");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
function preload(){
img=loadImage("dog_cat.jpg");
}
function modelLoaded() {
    console.log("modelLoaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}
function gotResult( error,results) {
if (error){
    console.log(error);
}
console.log(results);
objects = results
}