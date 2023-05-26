function slidingAnimation(){
    let div = document.querySelectorAll(".pagebuilder-column");
    let divs = [div[2],div[3],div[4]];
    const parentDiv = document.querySelectorAll(".pagebuilder-column-line")[1];

    let index = 0;
    const interval = 2000; 


    const firstClone = divs[0].cloneNode(true);
    const lastclone = divs[divs.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastclone.id = 'last-clone';

    parentDiv.append(firstClone)
    parentDiv.prepend(lastclone)

    const slideWidth = divs[index].clientWidth;

    parentDiv.style.transform = `translateX(${-slideWidth * index}px)`;

    const startSlide = () =>{
        setInterval(() => {
            index++;
            parentDiv.style.transform = `translateX(${-slideWidth * index}px)`;
            parentDiv.style.transform = '.7s';
            if(index > 3){
                index = 1;
                parentDiv.style.transform = `translateX(${-slideWidth * index}px)`;
            }
        }, interval);
    }

    parentDiv.addEventListener("transitionend",()=>{
    div = document.querySelectorAll(".pagebuilder-column");
    let divs = [div[2],div[3],div[4]];
        if(divs[index].id === firstClone.id){
            parentDiv.style.transform = 'none';
        }
    })
    startSlide();
}

function Matching(){
    const match = window.matchMedia("(max-width: 768px)");
    if(match.matches){
        slidingAnimation();
    }
    else{
        return 0;
    }
}


Matching();