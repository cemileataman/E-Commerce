//!home sidebar start

const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", function(){
    sidebar.style.left="0";// listeye tıklandığında css ler sıfırlanıyor
});
btnCloseSidebar.addEventListener("click",function(){
    sidebar.style.left="-100%";
});
//!home sidebar start

/*click outside start*/
document.addEventListener("click",function(event){
    if(!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)){
        sidebar.style.left="-100%";
    }
});
/*click outside end*/