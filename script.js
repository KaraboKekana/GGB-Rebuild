function reveal() {

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        let windowHeight = window.innerHeight;
        let revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

const searchToggle = document.getElementById("search-toggle");
const searchContainer = document.getElementById("search-container");

searchToggle.addEventListener("click", function(e){

    e.preventDefault();

    searchContainer.classList.toggle("show");

});

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let sections = document.querySelectorAll("section");

    sections.forEach(section => {

        if(section.innerText.toLowerCase().includes(filter)){
            section.style.display = "";
        } else {
            section.style.display = "none";
        }

    });

});