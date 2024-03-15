const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 4000);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);






// hover effect
let item1 = document.querySelector(".item-1");
let item2 = document.querySelector(".item-2");
let item3 = document.querySelector(".item-3");

let image1 = document.querySelector(".image-1");
let image2 = document.querySelector(".image-2");
let image3 = document.querySelector(".image-3");

item1.addEventListener("mouseover",()=>{
    item1.classList.add("hoverBg");
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
});

item1.addEventListener("mouseleave",()=>{
    item1.classList.remove("hoverBg");
});

item2.addEventListener("mouseover",()=>{
    item2.classList.add("hoverBg");
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
});

item2.addEventListener("mouseleave",()=>{
    item2.classList.remove("hoverBg");
});

item3.addEventListener("mouseover",()=>{
    item3.classList.add("hoverBg");
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
});

item3.addEventListener("mouseleave",()=>{
    item3.classList.remove("hoverBg");
});


// second scroller
const wrapper2 = document.querySelector(".wrapper2");
const carousel2 = document.querySelector(".carousel2");
const firstCardWidth2 = carousel2.querySelector(".card2").offsetWidth;
const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, isAutoPlay2 = true, startX2, startScrollLeft2, timeoutId2;

// Get the number of cards that can fit in the carousel 2at once
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel2 for infinite scrolling
carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel2 for infinite scrolling
carouselChildrens2.slice(0, cardPerView2).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel2 at appropriate postition to hide first few duplicate cards on Firefox
carousel2.classList.add("no-transition");
carousel2.scrollLeft = carousel2.offsetWidth;
carousel2.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel2 left and right
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id == "left" ? -firstCardWidth2 : firstCardWidth2;
    });
});

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel2
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return; // if isDragging2 is false return from here
    // Updates the scroll position of the carousel2 based on the cursor movement
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging2");
}

const infiniteScroll2 = () => {
    // If the carousel2 is at the beginning, scroll to the end
    if(carousel2.scrollLeft === 0) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    }
    // If the carousel2 is at the end, scroll to the beginning
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel2
    clearTimeout(timeoutId2);
    if(!wrapper2.matches(":hover")) autoPlay2();
}

const autoPlay2 = () => {
    if(window.innerWidth < 800 || !isAutoPlay2) return; // Return if window is smaller than 800 or isAutoPlay2 is false
    // Autoplay2 the carousel2 after every 2500 ms
    timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
}
autoPlay2();

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);


// slide image animation
let slideImage1 = document.getElementById("slide-image-1");
let slideImage2 = document.getElementById("slide-image-2");
let slideImage3 = document.getElementById("slide-image-3");

let slideDetails1 = document.getElementById("slide-image-details-1")
let slideDetails2 = document.getElementById("slide-image-details-2")
let slideDetails3 = document.getElementById("slide-image-details-3")

slideImage1.addEventListener("mouseover", function() {
    this.classList.add("active");
    slideImage2.classList.remove("active");
    slideImage3.classList.remove("active");
    setTimeout(() => {
        slideDetails1.classList.add("animate-[anim1_1s_ease-in]")
        slideDetails1.style.opacity = 1;
    }, 100);
    slideDetails2.style.opacity = 0;
    slideDetails3.style.opacity = 0;
});

slideImage2.addEventListener("mouseover", function() {
    this.classList.add("active");
    slideImage1.classList.remove("active");
    slideImage3.classList.remove("active");
    setTimeout(() => {
        slideDetails2.classList.add("animate-[anim1_1s_ease-in]")
        slideDetails2.style.opacity = 1;
    }, 100);
    slideDetails1.style.opacity = 0;
    slideDetails3.style.opacity = 0;
});

slideImage3.addEventListener("mouseover", function() {
    this.classList.add("active");
    slideImage1.classList.remove("active");
    slideImage2.classList.remove("active");
    setTimeout(() => {
        slideDetails3.classList.add("animate-[anim1_1s_ease-in]")
        slideDetails3.style.opacity = 1;
    }, 100);
    slideDetails1.style.opacity = 0;
    slideDetails2.style.opacity = 0;
});


let menuBar = document.querySelector(".menu");
let closeBtn = document.querySelector("#close");
let body = document.querySelector("#body");
let shade = document.querySelector(".black-shade");
let ul = document.querySelector(".ulist");

menuBar.addEventListener("click",()=>{
    ul.style.display = "flex";
    body.style.overflow = "hidden";
    shade.style.display = "flex"; 
});

closeBtn.addEventListener("click",()=>{
    ul.style.display = "none";
    body.style.overflow = "scroll";
    shade.style.display = "none";  
});

let nav = document.querySelector(".navbar");
let heropage = document.querySelector(".heropage");

document.onclick = function(e){
    if(!nav.contains(e.target) && !heropage.contains(e.target) && !closeBtn.contains(e.target)){
        ul.style.display = "none";
        body.style.overflow = "scroll";
        shade.style.display = "none";  
    }
}