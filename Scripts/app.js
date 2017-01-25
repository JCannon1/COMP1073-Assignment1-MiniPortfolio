/* javascript lives here */

console.log("App Started");

// declare/ initialize firstHeading variable 
var firstHeading = document.getElementById("firstHeading");


console.log(firstHeading.textContent);

var FirstParagraph = document.getElementById("FirstParagraph");

var myContent = "Hello, my name is Jesse Cannon and my goal of this portfolio site is to show you all of my web design skills I have acquired from my time at Georgian College. My Projects page will display all of the top pieces of work I have done so far for visuals. While the Contact page will ask you for your contact information. I hope my page is of great use to you. Jesse Cannon.";

FirstParagraph.textContent = myContent;

var SecondParagraph = document.getElementById("SecondParagraph");
var myHTMLContent = "<h2>About Me</h2>"
                    + " <p></p>";

SecondParagraph.innerHTML = myHTMLContent;


// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
console.log("clicked");
}