// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// let sections =document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a'); 

// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop-100;
//         let height=sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+ id +']').classList.add('active');
//             });
//             sec.classList.add('show-animate');
//         }

//         else {
//             sec.classList.remove('show-animate')
//         }
//     });
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky',window.scrollY > 100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

//     let footer = document.querySelector('footer');
//     footer.classList.toggle('show-animate',this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);
// }

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

// Menu Toggle Functionality
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Functionality
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all links and add to the current one
            navLinks.forEach(link => link.classList.remove('active'));
            
            let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }

            // Add animation class to current section
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Toggle sticky header
    header.classList.toggle('sticky', top > 100);

    // Close menu when scrolling (only if it's open)
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    // Footer animation when reaching bottom
    let isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    footer.classList.toggle('show-animate', isBottom);
};
