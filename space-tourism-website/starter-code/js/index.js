// crear variable que guarda elemento destination
const destination = document.querySelector("#destination");
const main = document.querySelector("#main");

//variable que permite almacenar fondos
let bgMobile = "bg-[url('./assets/home/background-home-mobile.jpg')]";
let bgDesktop = "md:bg-[url('./assets/home/background-home-desktop.jpg')]";

main.classList.add(bgMobile)
main.classList.add(bgDesktop)


// xra imprimir un dato en la consola del navegador
// console.log(destination)
destination.onclick = function () {
    // console.log("Este click funciona");
    bgDesktop = "md:bg-[url('./assets/destination/background-destination-desktop.jpg')]";
    main.classList.add(bgDesktop);
};

