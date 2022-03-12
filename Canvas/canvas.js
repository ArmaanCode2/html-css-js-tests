const canvas = document.querySelector('canvas');
const ct = canvas.getContext("2d");
const clearBtn = document.querySelector('.eraseDIV');
const currentColorShow = document.querySelector('.currentColor');
const downloadBtn = document.querySelector('.downloadDIV');
let color = "black";
let strokeWidth = 10;

//setting the default color to black
currentColorShow.style.background = "black";

//Color of Stroke
function strokeColor(sColor){
    color = sColor;
    currentColorShow.style.background = color;
    ct.beginPath();
}
//changing width of stroke
function changeStrokeWidth(swidth){
    strokeWidth = swidth;
    ct.beginPath();
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
            ct.lineWidth = strokeWidth;//5 very small , 10 small , 20 large , 30 very large
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
})

clearBtn.addEventListener('click',clearCanvas);

//changing colors of drawing
document.querySelector('.white').addEventListener('click',() => strokeColor("white"));
document.querySelector('.grey').addEventListener('click',() => strokeColor("grey"));
document.querySelector('.red').addEventListener('click',() => strokeColor("red"));
document.querySelector('.orange').addEventListener('click',() => strokeColor("orange"));
document.querySelector('.yellow').addEventListener('click',() => strokeColor("yellow"));
document.querySelector('.lightgreen').addEventListener('click',() => strokeColor("lightgreen"));
document.querySelector('.skyblue').addEventListener('click',() => strokeColor("skyblue"));
document.querySelector('.blue').addEventListener('click',() => strokeColor("blue"));
document.querySelector('.purple').addEventListener('click',() => strokeColor("purple"));
document.querySelector('.pink').addEventListener('click',() => strokeColor("pink"));
document.querySelector('.brown').addEventListener('click',() => strokeColor("brown"));


// next line start


document.querySelector('.black').addEventListener('click',() => strokeColor("black"));
document.querySelector('.darkGrey').addEventListener('click',() => strokeColor("#4C4C4C"));
document.querySelector('.darkRed').addEventListener('click',() => strokeColor("#740B07"));
document.querySelector('.darkOrange').addEventListener('click',() => strokeColor("#C43702"));
document.querySelector('.darkYellow').addEventListener('click',() => strokeColor("#E7A200"));
document.querySelector('.darkGreen').addEventListener('click',() => strokeColor("#01550F"));
document.querySelector('.darkBlue').addEventListener('click',() => strokeColor("#00559E"));
document.querySelector('.darkestBlue').addEventListener('click',() => strokeColor("#0D0864"));
document.querySelector('.darkPurple').addEventListener('click',() => strokeColor("#550068"));
document.querySelector('.darkPink').addEventListener('click',() => strokeColor("#A75476"));
document.querySelector('.darkBrown').addEventListener('click',() => strokeColor("#62300D"));


//brush size changing lsteners


document.querySelector('.very-small-size').addEventListener('click',() => changeStrokeWidth(5));
document.querySelector('.small-size').addEventListener('click',() => changeStrokeWidth(10));
document.querySelector('.large-size').addEventListener('click',() => changeStrokeWidth(20));
document.querySelector('.very-large-size').addEventListener('click',() => changeStrokeWidth(30));

downloadBtn.addEventListener('click',()=>{
    const canvasImg = canvas.toDataURL();
    if(window.navigator.msSaveBlob) alert("Browser Not Supported")
    else{
        const anchor = document.createElement("a");
        document.body.appendChild(anchor);
        anchor.href = canvasImg;
        anchor.download = "Canvas-img.png";
        anchor.click();
        document.body.removeChild(anchor); 
    }
})