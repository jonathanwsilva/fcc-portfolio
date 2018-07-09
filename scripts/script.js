
let navLinks = document.querySelector(".navbar-content");

//Click events delegated to entire navbar
navLinks.addEventListener("click", function(event){
    let targetID = event.target.textContent;
    let targetSection = document.querySelector("section#" + targetID); 
    if(targetSection === null){
        console.log("No section found with ID #" + targetID);
        return;
    }

    //Keep the browser from jumping immediately to the target section
    event.preventDefault();

    //Create a scrolloptions object to act as scrollTo argument
    let scrollOptions = Object.create(null);
    scrollOptions.top = targetSection.offsetTop;
    scrollOptions.behavior = "smooth";
    window.scrollTo(scrollOptions);

    //User might have expected us to jump to target element.
    //For accessinility reasons, focus on target element 
    targetSection.focus();

});
