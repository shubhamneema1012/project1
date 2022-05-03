let b=document.querySelector(".galhover");
let sixthslidervalue=0;
let ninthslidervalue=0;
let slide3=document.querySelector(".n2");
let slide=document.querySelector(".slide1");
let slide2=document.querySelector(".sixth2slide");
let a=document.querySelector(".gal");
a.addEventListener("click",()=>{
    b.style.height="100%";
})
const incslide=()=>{
        slide.style.transform="translate(-50%)";
}
const decslide=()=>{
    slide.style.transform="translate(0%)";
}
const decsixthslide=()=>{
    if(sixthslidervalue<0){
        slide2.style.transform=`translate(${sixthslidervalue+20}%)`;
        sixthslidervalue=sixthslidervalue+20;
    }
}
const incsixthslide=()=>{
    if(sixthslidervalue>-60){
    slide2.style.transform=`translate(${sixthslidervalue-20}%)`;
    sixthslidervalue=sixthslidervalue-30;
    }
}
const decninthslide=()=>{
    if(ninthslidervalue<0){
        slide3.style.transform=`translate(${ninthslidervalue+20}%)`;
        ninthslidervalue=ninthslidervalue+20;
    }
}
const incninthslide=()=>{
    if(ninthslidervalue>-60){
    slide3.style.transform=`translate(${ninthslidervalue-20}%)`;
    ninthslidervalue=ninthslidervalue-30;
    }
}