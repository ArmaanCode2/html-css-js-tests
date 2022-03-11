const canvas = document.querySelector('canvas');
const ct = canvas.getContext("2d");
const clearBtn = document.querySelector('.eraseDIV')
let color = "black";

//Color of Stroke
function strokeColor(sColor){
    color = sColor;
}

//Clear The Canvas
function clearCanvas(){
    ct.clearRect(0, 0, canvas.width, canvas.height);
    ct.beginPath();
}


//the size of the canvas
function sizing(){
    canvas.height = window.innerHeight - 140;
    canvas.width = window.innerWidth - 6;
}

window.addEventListener('load',() =>{

    //code here
    let paint = false;

        function start(e){
            paint = true;
            draw(e);
        }

        function finished(){
            paint = false;
            ct.beginPath();
        }
        function draw(e){
            if(!paint) return;
            ct.lineWidth = 10;
            ct.lineCap = "round";
            ct.strokeStyle = color; 

            ct.lineTo(e.clientX,e.clientY);
            ct.stroke();
            ct.beginPath();
            ct.moveTo(e.clientX,e.clientY);
        }

    canvas.addEventListener('mousedown',start);
    canvas.addEventListener('mouseup',finished);
    canvas.addEventListener('mousemove',draw);
})

sizing();

window.addEventListener('resize',() =>{
    sizing();
    console.log('hello');
})

clearBtn.addEventListener('click',clearCanvas);

//changing colors of drawing
document.querySelector('.black').addEventListener('click',() => strokeColor("black"));
document.querySelector('.purple').addEventListener('click',() => strokeColor("purple"));
document.querySelector('.red').addEventListener('click',() => strokeColor("red"));
document.querySelector('.blue').addEventListener('click',() => strokeColor("blue"));
document.querySelector('.pink').addEventListener('click',() => strokeColor("pink"));
document.querySelector('.yellow').addEventListener('click',() => strokeColor("yellow"));