noseX=0
noseY=0
rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(450,450);
canvas.position(760,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',getPoses)
}

function draw(){
    background('#1F51FF')
    document.getElementById("square_sides").innerHTML="width and height of a square will be" + difference + "px"; 
    fill('#F0FFFF');
    stroke('#B6D0E2');
    square(noseX,noseY,difference)
}

function modelLoaded(){
    console.log("poseNet is initialized")
}

function getPoses(results){
    if(results.length> 0){console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX=" + noseX + "noseY=" + noseY )

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x; 
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference )
    }
}