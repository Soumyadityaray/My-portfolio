let music=new Audio("music.mp3")
let turnaud=new Audio("ting.mp3")
let gameoveraud=new Audio("gameover.mp3")
let turn="X"
//Function for changing turn.
const turnchange=()=>{
    return turn==="X"?"O":"X"
}
//Logic for declaring winner
const winhua = ()=>{
    //Get all elements with the class name b-text.
    document.querySelector('.info').innerText=""
    console.log("Hey!!")
    let boxcont=document.getElementsByClassName("b-text")
    console.log(boxcont)
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let text
    win.forEach(ele=>{
        console.log("Hey! In loop")
        if((boxcont[ele[0]].innerText===boxcont[ele[1]].innerText) && (boxcont[ele[2]].innerText===boxcont[ele[1]].innerText) && (boxcont[ele[0]].innerText!=="")){
        {
            gameoveraud.play();
            text="Yeayy!!!  "+boxcont[ele[0]].innerText+"  has won the game."
            music.play();
        }
    }
    })
    let i=0;
        const typewrite=()=>{
            if(i<text.length)
            {
                document.querySelector('.info').innerText=document.querySelector('.info').innerText+text.charAt(i);
                i++;
            }
            setTimeout(typewrite,80);
        }
        typewrite();
        document.querySelector('.win-img').getElementsByTagName("img")[0].style.height="15vh"
} 
//Logic for game play.
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let content=element.querySelector('.b-text');
    element.addEventListener('click',()=>{
        if(content.innerText ==='')
        {
            content.innerText=turn;
            turn=turnchange();
            turnaud.play();
            winhua();
        }
    })
})
restart.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName("b-text")
Array.from(boxtext).forEach(element=>{
    element.innerText=""
});
document.querySelector('.info').innerText=""
document.querySelector('.win-img').getElementsByTagName("img")[0].style.height="0vh"
music.pause();
music.currentTime=0;
})