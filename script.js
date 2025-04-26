let frontSideCollection = document.querySelectorAll(".front-side");
let backSideCollection = document.querySelectorAll(".back-side");


function frontSideFlip(event){
    frontSideCollection.forEach((el, index) =>{
        el.addEventListener('click', () => {
            event.currentTarget.classList.add("active");
            backSideCollection[index].classList.add("active")
        })
    })
}

function backSideFlip(event){
    backSideCollection.forEach((el, index) =>{
        el.addEventListener('click', () => {
            event.currentTarget.classList.remove("active");
            frontSideCollection[index].classList.remove("active")
        })
    })
}

