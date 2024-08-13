let p=document.getElementById("History")
p.classList.add("x")
let Vision=document.getElementById("Vision")
let goal=document.getElementById("Goals")

let titulo=document.getElementById("titulo")

let nall=document.getElementById("nall")


let lastClickedElement = null; // Variable to keep track of the last clicked element

document.body.addEventListener("click", function (e) {
    p.classList.remove("x")
    // Check if the clicked element is one of the target elements
    if (e.target.matches("#Vision")) {
        // Remove the 'x' class from the previously clicked element, if any
        if (lastClickedElement && lastClickedElement !== e.target) {
            lastClickedElement.classList.remove("x");
        }
    
        
        // Add the 'x' class to the current clicked element
        e.target.classList.add("x");

        // Update the last clicked element
        lastClickedElement = e.target;
        titulo.textContent="Vision"
    }

else if (e.target.matches("#History")) {
    if (lastClickedElement && lastClickedElement !== e.target) {
        lastClickedElement.classList.remove("x");
    }

    
    // Add the 'x' class to the current clicked element
    e.target.classList.add("x");

    // Update the last clicked element
    lastClickedElement = e.target;
    titulo.textContent="History"
}

 

else if (e.target.matches("#Goals")) {
    if (lastClickedElement && lastClickedElement !== e.target) {
        lastClickedElement.classList.remove("x");
    }

    
    // Add the 'x' class to the current clicked element
    e.target.classList.add("x");

    // Update the last clicked element
    lastClickedElement = e.target;

 titulo.textContent="Goals"

}
});
 

         