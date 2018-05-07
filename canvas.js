//variables
const   scene = document.getElementById('scene'),
        ctx = scene.getContext('2d'),
        btns = document.getElementById('btns'),
        x = window.innerWidth,
        y = window.innerHeight; 
scene.width = x;
scene.height = y;
//listeners
listeners();
function listeners(){
    btns.addEventListener('click', function(e){
        if(e.target.parentElement) {
            let dibujo = e.target.innerHTML; 
            ctx.beginPath();
            window[dibujo]();
        }
    })
}
//funciones dibujos
function drawCirclewithStroke(){
    ctx.arc(x/3, y/3, 200, 0, 2 * Math.PI); 
    ctx.stroke();   
}
function drawCirclewithFill(){ 
    ctx.fillStyle = '#ec0000';
    ctx.arc(x/2, y/2, 200, 0, 2 * Math.PI);  
    ctx.fill();  
}
function drawLine(){   
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);  
    ctx.stroke();  
}
function writeTextFill(){
    //text
    ctx.font = "20px Arial";
    //'text', x, y
    ctx.fillText("Texto fill", x - 150, y - 100);  
}
function writeTextStroke(){
    //stroketext
    ctx.font = "20px Arial";
    //'text', x, y
    ctx.strokeText("Texto stroke", 20, 100);
} 
function drawSquare(){  
    ctx.rect(50,y/2,200,200); // x, y, w ,h 
    ctx.lineWidth="6";
    ctx.strokeStyle="red"; 
    ctx.stroke(); 
}
function drawFillSquare(){ 
    ctx.fillStyle="black";
    ctx.fillRect(20,20,200,200);
}
function drawFillSquarewithClearRect(){  
    ctx.fillStyle="blue";
    ctx.fillRect(1200,20,200,200);
    ctx.clearRect(1220,40,100,50);
}
function gradient(){
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white"); 
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80); 
}
function circularGradient(){
    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white"); 
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}
function curve(){ 
    ctx.moveTo(0,y/2);
    ctx.quadraticCurveTo(20,300,x,y/2);
    ctx.stroke();
}
function bezier(){ 
    ctx.moveTo(0,y/2);
    ctx.bezierCurveTo(20,300,20,330,x,y/2);
    ctx.stroke();
}
