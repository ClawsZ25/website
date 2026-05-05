//grabbing needed elements from the page
const profilePic = document.getElementById("profile-pic");
const sideNav = document.getElementById("side-nav");
const closeNav = document.getElementById("close-nav");
const overlay = document.getElementById("overlay");

//Adding event listerner to the image so that it can be clicked and reveal the side menu with links
profilePic.addEventListener("click", () => {
    sideNav.classList.add("open");
    overlay.classList.add("active");
});

// event listerners to close the menu
closeNav.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
    sideNav.classList.remove("open");
    overlay.classList.remove("active");
}

//Section navigation logic
const tabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll(".content-section");

//for each tab add an event listerner that changes the content
tabs.forEach(tab => {
    tab.addEventListener("click", ()=>{
        const target = tab.dataset.section;

        //remove active state from everything
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));

        //active clicked tav + matching section
        tab.classList.add("active");
        document.getElementById(target).classList.add("active");
    })
})


//---------------- Game Project Logic -----------------------

const gameCards = document.querySelectorAll(".game-card");
const gameDetails = document.querySelectorAll(".game-detail");
const closeGameButtons = document.querySelectorAll(".close-game");

gameCards.forEach(card => {
    card.addEventListener("click", ()=>{
        const gameId = card.dataset.game;

        //Hide all game details
        gameDetails.forEach(detail =>
            detail.classList.remove("active")
        );

        //Show selected game detail
        document.getElementById(`${gameId}-detail`).classList.add("active");
    });
});

closeGameButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        gameDetails.forEach(detail =>
            detail.classList.remove("active")
        );
    });
});

//Code projects section
// ---------------- Coding Project Logic -----------------------

const codingCards = document.querySelectorAll(".coding-card");
const codingDetails = document.querySelectorAll(".coding-detail");
const closeCodingButtons = document.querySelectorAll(".close-coding");

codingCards.forEach(card => {
    card.addEventListener("click", () => {
        const projectId = card.dataset.project;

        // Hide all
        codingDetails.forEach(detail =>
            detail.classList.remove("active")
        );

        // Show selected
        document.getElementById(`${projectId}-detail`)
            .classList.add("active");
    });
});

closeCodingButtons.forEach(button => {
    button.addEventListener("click", () => {
        codingDetails.forEach(detail =>
            detail.classList.remove("active")
        );
    });
});


// For the Hobby Cards

// ---------------- Hobby Logic -----------------------

const hobbyCards = document.querySelectorAll(".hobby-card");
const hobbyDetails = document.querySelectorAll(".hobby-detail");
const closeHobbyButtons = document.querySelectorAll(".close-hobby");

hobbyCards.forEach(card => {
    card.addEventListener("click", () => {
        const hobbyId = card.dataset.hobby;

        // Hide all
        hobbyDetails.forEach(detail =>
            detail.classList.remove("active")
        );

        // Show selected
        document.getElementById(`${hobbyId}-detail`)
            .classList.add("active");
    });
});

closeHobbyButtons.forEach(button => {
    button.addEventListener("click", () => {
        hobbyDetails.forEach(detail =>
            detail.classList.remove("active")
        );
    });
});

// ---------------- Slideshow Logic -----------------------

document.querySelectorAll(".slideshow").forEach(slideshow => {
    let slides = slideshow.querySelectorAll(".slide");
    let index = 0;

    const showSlide = (i) => {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    };

    slideshow.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    slideshow.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});
