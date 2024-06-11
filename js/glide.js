const productsContainer = document.getElementById("product-list");

export function product1(){
    const config = {
        perView:4,
        gap:20,
        // autoplay:3000,
        breakpoints : {
            992: {
                perView:3,
            },768:{
                perView:2,
            },
            576:{
                perView:2,
            }
        }
    };
    new Glide(".product-carousel",config).mount(); 
}


const config2 = {
    perView:4,
    gap:20,
    // autoplay:3000,
    breakpoints : {
        992: {
            perView:3,
        },768:{
            perView:2,
        },
        576:{
            perView:2,
        }
    }
};

 productsContainer && new Glide(".product-carousel2",config2).mount();

export function singleThumbs(){
    const config3 = {
        perView:5,
        gap:20,
        // autoplay:3000,
        breakpoints : {
            992: {
                perView:3,
            },
        },
    };
    
    new Glide(".product-thumb",config3).mount();
}