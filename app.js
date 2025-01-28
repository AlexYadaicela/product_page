const toggler = document.getElementById('toggler'); 
const navbar = document.getElementById('navbarNav');
const navbarItems = document.querySelector('.navbar_nav');

toggler.addEventListener('click', (e) => {
    const togglerIsExpanded = toggler.ariaExpanded; 
    const navbarIsExpanded = navbar.ariaExpanded; 
    if(togglerIsExpanded === 'true' && navbarIsExpanded === 'false'){
        toggler.ariaExpanded = 'false'; 
        navbar.ariaExpanded = 'true'; 
        navbarItems.ariaExpanded = 'true'; 
    }else if(togglerIsExpanded === 'false' && navbarIsExpanded === 'true'){
        toggler.ariaExpanded = 'true'; 
        navbar.ariaExpanded = 'false'; 
        navbarItems.ariaExpanded = 'false';
    }
    
});


const imgGallery = [
    './images/image-product-1.jpg', 
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];

const img = document.getElementById('prod_img'); 

const prevImg = document.getElementById('func_previous'); 
const nextImg = document.getElementById('func_next'); 


function preloadImage(url){
    const preloadedImg = new Image(); 
    preloadedImg.onload = () => {
        img.src = `${url}`; 
    }
    preloadedImg.src = `${url}`; 
}

let currImg = imgGallery.length - 1; 

prevImg.addEventListener('click', () => { 
    if(currImg === 0){
        currImg = imgGallery.length - 1;   
    } 
    preloadImage(imgGallery[currImg]); 

    currImg-=1; 
}); 

nextImg.addEventListener('click', () => {
    if(currImg >= imgGallery.length - 1){
        currImg = 0;  
    }
    preloadImage(imgGallery[currImg]); 
    currImg += 1; 
})
