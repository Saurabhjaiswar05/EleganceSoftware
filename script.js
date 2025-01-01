const bgColor = document.querySelector("#bgColor");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    bgColor.style.backgroundColor = "whitesmoke";
    bgColor.style.opacity = "0.7";
  } else {
    bgColor.style.backgroundColor = "";
  }
});

// this is for click active on menus

const topUp = document.querySelector("#topup");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topUp.style.display = "flex";
  } else {
    topUp.style.display = "none";
  }
};

topUp.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// active buttons

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const services = document.querySelector("#services");
const works = document.querySelector("#works");
const contact = document.querySelector("#contact");


home.addEventListener("click",function(){
    home.classList.add("extramenu");
    about.classList.remove("extramenu");
    services.classList.remove("extramenu");
    works.classList.remove("extramenu");
    contact.classList.remove("extramenu");
    
});

about.addEventListener("click",function(){
    about.classList.add("extramenu");
    home.classList.remove("extramenu");
    services.classList.remove("extramenu");
    works.classList.remove("extramenu");
    contact.classList.remove("extramenu");
    
});

services.addEventListener("click",function(){
    about.classList.remove("extramenu");
    home.classList.remove("extramenu");
    services.classList.add("extramenu");
    works.classList.remove("extramenu");
    contact.classList.remove("extramenu");
    
});

works.addEventListener("click",function(){
    about.classList.remove("extramenu");
    home.classList.remove("extramenu");
    services.classList.remove("extramenu");
    works.classList.add("extramenu");
    contact.classList.remove("extramenu");
    
});

contact.addEventListener("click",function(){
    about.classList.remove("extramenu");
    home.classList.remove("extramenu");
    services.classList.remove("extramenu");
    works.classList.remove("extramenu");
    contact.classList.add("extramenu");
    
});

// navbar 


const hamburger = document.querySelector("#hamburger");
const cancel = document.querySelector("#cancel");
const hideShow = document.querySelector("#hideshow");


hamburger.addEventListener("click",function(){
    cancel.style.display="flex";
  cancel.style.color="white";
    hamburger.style.display = "none";
    hideShow.style.display = "flex"
    

});

cancel.addEventListener("click",function(){
    cancel.style.display="none";
    hamburger.style.display = "flex";
    hideShow.style.display = "none";
});


// ================================Form ===========================

(function () {
  emailjs.init("0mf1PiYv7L5c0Z1k6"); 
})();

const emailForm = document.querySelector("#emailForm");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;
  const statusMessage = document.getElementById("statusMessage");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    statusMessage.innerText = "Please enter a valid email address.";
    statusMessage.style.color = "red";
    return; // Stop execution if email is invalid
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    reply_to: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send("service_yaz0gdu", "template_g6sc0yo", templateParams)
    .then(
      function (response) {
        console.log("Email sent successfully!", response.status, response.text);
        statusMessage.innerText = "Message sent successfully!";
        statusMessage.style.color = "green";
      },
      function (error) {
        console.error("Failed to send email.", error);
        statusMessage.innerText = "Failed to send message. Please try again.";
        statusMessage.style.color = "red";
      }
    );

  emailForm.reset();
});



    // ============================onLaod======================================

    window.addEventListener("load",function(){
      const loading = this.document.querySelector("#loading");

      setTimeout(()=>{
        loading.style.display = "none";
      },600);
    })


