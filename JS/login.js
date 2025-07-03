document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        const form = document.querySelector('form');
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let hasError = false;

        const oldMes = form.querySelector('.error-message');
        if(oldMes){
            oldMes.remove();
        };
        event.preventDefault();
        console.log(email, password);
        


        if(!email || !password){
            let p =  document.createElement('p')
            p.innerText = "Please fill in all fields"
            p.className = 'error-message';
            p.style.color = "red";
            form.appendChild(p);
            event.preventDefault();
            hasError = true;
        };
        
        if (!/\S+@\S+\.\S+/.test(email)){
            let p =  document.createElement('p')
            p.innerText = "Please enter a valid email address"
            p.className = 'error-message';
            p.style.color = "red";
            form.appendChild(p);
            event.preventDefault();
            hasError = true;
        }
        if(!hasError) {
            window.location.href = './Dashboard/dashboard.html';
        }
    });
});