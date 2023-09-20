function reveal() {
    var reveals = document.querySelectorAll(".portfolio");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =10;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function reveal2() {
    let reveals = document.querySelectorAll(".section__title--skills");
  
    for (const element of reveals) {
      let windowHeight = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
  
      if (elementTop < windowHeight) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal2);

function reveal3() {
    let reveals = document.querySelectorAll(".section__title--education");
  
    for (const element of reveals) {
      let windowHeight = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
  
      if (elementTop < windowHeight) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal3);


function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});