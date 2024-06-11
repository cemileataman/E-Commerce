 export function zoomFunc(){
    const singleImage = document.querySelector("#single-image");
    const singleImageWrapper = document.querySelector(".single-image-wrapper");

    singleImageWrapper.addEventListener("mousemove",function(e){
       const x  = e.clientX - e.target.offsetLeft; //x ekseninde mouse kullanınca
       const y  = e.clientY - e.target.offsetTop; //x ekseninde mouse kullanınca

       singleImage.style.transformOrigin = `${x}px ${y}px` ;
       singleImage.style.transform = "scale(5)";//zoom yapmak için 
    });
    singleImageWrapper.addEventListener("mouseleave",function(){
        singleImage.style.transformOrigin = `center`; 
        singleImage.style.transform ="scale(1)";
    });
}
export default zoomFunc();

