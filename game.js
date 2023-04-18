const correctAnswers = ['option1','option2','option3','option4'];
const form = document.querySelector('.quiz-form');
const points = document.querySelector('.points');

form.addEventListener('submit', event =>{
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.radio1.value,form.radio2.value,form.radio3.value,form.radio4.value,];
    // Check Answers
    userAnswers.forEach((answer,index)=> {
        if (answer === correctAnswers[index]) {
            score = score + 25;
        }
    });

    // Show Score
    window.scrollTo(0,0);
    
    points.classList.remove('d-none');

    let scoreIncrease = 0;
    const timer = setInterval(()=>{
        points.querySelector('span').innerText = ''+ scoreIncrease + '%';
        if(scoreIncrease === score){
            clearInterval(timer);
        }
        else{
            scoreIncrease++;    
        }
    },10);

});
let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navber");
let scrollTop = document.querySelector("#scroll-top");

menu.onclick = () =>{
  menu.classList.toggle("fa-times");
  navber.classList.toggle("active")
}

window.onscroll = () =>{
  menu.classList.remove("fa-times");
  navber.classList.remove("active");


  if(window.scrollY > 60){
    scrollTop.classList.add("active");
  }else{
    scrollTop.classList.remove("active");
  }
}

function loader () {
  document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
  setInterval(loader , 3000)
}
window.onload = fadeOut ();