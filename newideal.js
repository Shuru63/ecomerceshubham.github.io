
    let popup=document.getElementById("navbar");
    let marquee=document.getElementById("marquee");
    let arrow=document.getElementsByClassName("arrow");
    function openbar(){
       popup.classList.add("open-navbar");
       marquee.classList.add("arrow-off");
       arrow.classList.add("marquee-off");
    }
     
    function closebar(){
       popup.classList.remove("open-navbar");
       marquee.classList.remove("arrow-off");
       arrow.classList.remove("marquee-off");
    }
    
    let poster=document.getElementById("poster");
    let mask=document.getElementById("mask");
    function closeposter(){
       poster.classList.add("open-poster");
       mask.classList.add("close-mask");
    }
  
    function myFunction() {
      alert("your query is submited  contect soon !");
    }
  
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex -= n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) 
  { 
    slideIndex = 1
   }
  if (n < 1) 
  {
     slideIndex = slides.length
     }
  for (i = 0; i < slides.length; i++)
   {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  setInterval(() => {
  
    if (n > slides.length) 
    { 
      slideIndex = 1
     }
     else{
      showSlides(slideIndex += n);
     }
  }, 7000);
}

