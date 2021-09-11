let btnOne = document.querySelector('.btnOne');
let btnTow = document.querySelector('.btnTow');

const modal = document.querySelector(".modal");
btnOne.addEventListener("click", function() {



    modal.classList.add("active");



})
btnTow.addEventListener("click", function() {
    modal.classList.remove("active");
})

let a = document.querySelectorAll("button");
console.log(a);
a.forEach(man => {
    man.addEventListener("click", function(e) {
        let divanim = document.createElement("span");

        let x = e.clientX - man.getBoundingClientRect().left;
        let y = e.clientY - man.getBoundingClientRect().top;
        divanim.style.left = x + "px";
        divanim.style.top = y + "px";

        this.appendChild(divanim);
        setTimeout(() => {
            divanim.remove();
        }, 1000);
    })
})