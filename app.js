let STR="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str="abcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let sym="!@#$%^&*()_+";
let length=0;
let pass="";
let temp="";
let bt=document.querySelector("button");
bt.addEventListener("click",function(){
    checkinputs();
    password();
    img.style.opacity=0.5;
})
let inp=document.querySelector("input");
function password(){
    pass="";
    let characters=[];
    if (length > 0) {
        if (temp.includes(STR)) characters.push(STR[Math.floor(Math.random() * STR.length)]);
        if (temp.includes(str)) characters.push(str[Math.floor(Math.random() * str.length)]);
        if (temp.includes(num)) characters.push(num[Math.floor(Math.random() * num.length)]);
        if (temp.includes(sym)) characters.push(sym[Math.floor(Math.random() * sym.length)]);

        while (characters.length < length) {
            characters.push(temp[Math.floor(Math.random() * temp.length)]);
        }
        for(let i=0;i<characters.length;i++)
            {
                let index=Math.floor(Math.random()*i);
                let dupv=characters[index];
                characters[index]=characters[i];
                characters[i]=dupv;
            }
        pass=characters.join('');
    }
    inp.value=pass;
}
function checkinputs(){
    temp="";
let uppercase=document.getElementById("v1").checked;
let lowercase=document.getElementById("v2").checked;
let numbers=document.getElementById("v3").checked;
let symbols=document.getElementById("v4").checked;
let passlen=document.querySelector(".length");
length=parseInt(passlen.value);
if(uppercase)
    temp+=STR;
if(numbers)
    temp+=num;
if(lowercase)
    temp+=str;
if(symbols)
    temp+=sym;
}
let img=document.querySelector("img");
img.addEventListener("click",function(){
    img.style.opacity=1;
    let cp=document.querySelector(".pass");
    cp.select();
    document.execCommand("copy");
    console.log(cp.value);
})
