const navSlide = () => {


    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll('.nav-links li');
    const modal = document.querySelector('.modal');


    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        modal.classList.toggle("activeModal");



        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `animateLi .3s ease forwards ${index/6 +.5}s`;
            }

        })
        burger.classList.toggle("toggle");




    });
}

const activeLink = () => {
    const linkActive = document.querySelectorAll('.nav-links a');


    linkActive.forEach((link, index) => {

        if (link.classList[1] == linkId.id) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

    })

}

activeLink();
navSlide();