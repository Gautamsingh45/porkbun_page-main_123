// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const popup = document.getElementById("login-popup");
    const closeButton = document.getElementById("close-button");
  
    loginButton.addEventListener("click", function() {
      popup.classList.add("open");
    });
  
    closeButton.addEventListener("click", function() {
      popup.classList.remove("open");
    });
  });
  