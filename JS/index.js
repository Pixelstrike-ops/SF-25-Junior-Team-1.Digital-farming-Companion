function loadComponent(id, file){
    fetch(file)
    .then(res=>res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
}
window.onload = () =>{
    loadComponent("header","header.html")
    loadComponent("footer", "footer.html")
}