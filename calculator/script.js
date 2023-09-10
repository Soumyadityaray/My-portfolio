let buttons= document.querySelectorAll('.btn');
let str=""
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('input').value=str;
        }
        else if(e.target.innerHTML== 'C'){
            str="";
            document.querySelector('input').value=str;
        }
        else{
            if(e.target.innerHTML=='X')
            str=str+'*';
            else
            str=str+e.target.innerHTML;
            document.querySelector('input').value=str;
        }
    })
})