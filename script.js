const hamburgerBtn = document.querySelector(".hamburger_btn")
const mobileNavContainer = document.querySelector(".mobile_nav_container")
const closeBtn = document.querySelector(".close_btn")

const header = document.querySelector('header');
document.addEventListener('scroll', () => {
    if(!header.classList.contains('no_effect')){
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
    }
});
  

hamburgerBtn.addEventListener('click', (e)=>{
    console.log(e.target);
    mobileNavContainer.classList.add('active')
})

closeBtn.addEventListener('click', (e)=>{
    mobileNavContainer.classList.remove('active')
})

mobileNavContainer.addEventListener('click', function(e){
    if(e.target == this){
        console.log(e.target);
        mobileNavContainer.classList.remove('active')
    }
})