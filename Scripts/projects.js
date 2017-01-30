console.log("App Started");

var firstHeadingProjects = document.getElementById("firstHeadingProjects");

console.log(firstHeadingProjects.textContent);

// create variable for "Project 1" text content 
var FirstProject = document.getElementById("FirstProject");
var myContent = "This first project is one of my favourites as it has a unique design to it and displays my ability to make lists.";
FirstProject.textContent = myContent;

// create variable for "Project 2" text content 
var SecondProject = document.getElementById("SecondProject");
var myHTMLContent = "My second project also shows my ability with HTML, CSS and navigation lists. However, this project was solely designed and created by me and each page has a different style to it, but also keeps the same theme going as well.";
SecondProject.innerHTML = myHTMLContent;

// create variable for "Project 3" text content 
var ThirdProject = document.getElementById("ThirdProject");
var myThirdContent = "This final project is my favourite piece because I feel I was successfully able to implement several unique design structures into it and it turned out just the way I wanted it to.";
ThirdProject.textContent = myThirdContent;

