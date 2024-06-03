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
