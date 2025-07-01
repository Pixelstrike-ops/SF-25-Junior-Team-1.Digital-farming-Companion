function loadComponent(id, file){
    fetch(file)
    .then(res=>res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
        const links = document.querySelectorAll('#header nav div a');
        links.forEach(link =>  {
            if(link.href === window.location.href || link.pathname === window.location.pathname) {
                link.classList.add('active');
            }
        })
    })
}
window.onload = () =>{
    loadComponent("header","header.html")
    loadComponent("footer", "footer.html")
}