const imgContainer = document.querySelectorAll(".slide > img");
const displayImg = document.getElementById('prod_img'); 

imgContainer.forEach((img) => {
    img.addEventListener('click', () => {
        const index = Number(img.getAttribute('data-index'));
        const preImg = new Image(); 

        preImg.onload = () => {
            displayImg.src = `./images/image-product-${index + 1}.jpg`; 
        }

        preImg.src = `./images/image-product-${index + 1}.jpg`


        img.setAttribute('data-active', 'true');
        for(let i = 0; i < imgContainer.length; i++){
            if(index !== i){
                imgContainer[i].setAttribute('data-active', 'false'); 
            }
        }
    });
}); 

