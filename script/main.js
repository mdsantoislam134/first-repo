var bars = document.querySelector("#bars");
var nav = document.querySelector("#all-nav");

bars.addEventListener("click", () => {

    if (nav.className === "hiden") {
        nav.classList.remove("hiden")
    } else {
        nav.classList.add("hiden")
    }
});

/* cart section start hear*/
const pro_count = document.querySelector(".pro-count");
var count = 1;


const addpro = () => {
    count++;
    pro_count.innerHTML = count ;
}

const minus = () => {
    
    if(count==1){
        count = 1;
        pro_count.innerHTML = count ;
    }else{
        count--;
        pro_count.innerHTML = count ;
    }
}


