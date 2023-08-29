
/* in index.html to project.html*/
document.getElementById("projectDiv").addEventListener("click", function() {
    window.location.href = "project.html";
});

document.getElementById("contactDiv").addEventListener("click", function() {
    window.location.href = "contact.html";
});


/*in project.html to index.html*/
document.querySelector(".cta").addEventListener("click", function () {
    window.location.href = "index.html";
})

