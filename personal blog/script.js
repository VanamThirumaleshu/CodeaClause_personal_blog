AOS.init({
    duration : 1000
});




hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
    navBar=document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



document.addEventListener('DOMContentLoaded', function() {
    
    var navLinks = document.getElementsByClassName('nav-link');
  
    
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove('active');
        }
  
        
        this.classList.add('active');
        navBar.classList.remove("active");
      });
    }
  });


