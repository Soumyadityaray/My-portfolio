let a=document.getElementsByClassName("know")[0];
text="My name is Soumyaditya Ray.I am Currently pursuing b.tech in Electronics and communication engineering at Heritage Institute of Technology,Kolkata.I have done my class 10th and 12th from D.A.V Model School ,Durgapur,Paschim Bardhaman,West Bengal.I scored a 95% in my 10th and a 86.55% in my Senior Secondary Examination.I am an enthusiastic coder.I have done coding in languages like C,C++ and Python.I am also moderate level web developer with the knowledge of HTML,CSS and Javascript.Currently I am in my 7th semester of b.tech.Currently I am looking for a job opportunity where I can contribute positively in the company's growth along with enhancement in my personal skillset."
let i=0;
const typewrite=()=>{
   
    if(i<text.length){
        a.innerHTML=a.innerHTML+text.charAt(i);
        i++;
        setTimeout(typewrite,10);
    }
}