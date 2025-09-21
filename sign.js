document.querySelector('#loginshow').addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
    document.body.classList.add('no-scroll'); //login modal

});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
    document.body.classList.remove("no-scroll"); // closing
});
document.querySelector('#forgott').addEventListener("click", function() {
    document.querySelector(".register").classList.add("active");
    document.body.classList.add('no-scroll'); // register modal

});

document.querySelector("#login").addEventListener("click", function() {
    document.querySelector(".register").classList.remove("active");
    document.body.classList.remove("no-scroll"); // moving to the login modal again
});


