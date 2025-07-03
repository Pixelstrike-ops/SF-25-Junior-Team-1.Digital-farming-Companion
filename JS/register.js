function submit(event){

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
    const form = document.querySelector('form');
    const fName = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();;
    const cPassword = document.getElementById("cpassword").value;
    const dob = document.getElementById("dob").value.trim();

    const oldMes = form.querySelector('.error-message');
    if(oldMes){
        oldMes.remove();
    };

    if(!fName || !lName || !email || !password || !cPassword || !dob){
       let p =  document.createElement('p')
       p.innerText = "Please fill in all fields"
       p.className = 'error-message';
       p.style.color = "red";
       form.appendChild(p);
       console.log(p);
       event.preventDefault();
    };
    if(password !== cPassword){
        let p =  document.createElement('p')
        p.innerText = "Passwords do not match"
        p.className = 'error-message';
        p.style.color = "red";
        form.appendChild(p);
        console.log(p);
        event.preventDefault();
    };
    if (password.length < 8){
        let p =  document.createElement('p')
        p.innerText = "Password must be at least 8 characters long"
        p.className = 'error-message';
        p.style.color = "red";
        form.appendChild(p);
        event.preventDefault();
    };
    if (!/\S+@\S+\.\S+/.test(email)){
        let p =  document.createElement('p')
        p.innerText = "Please enter a valid email address"
        p.className = 'error-message';
        p.style.color = "red";
        form.appendChild(p);
        console.log(p);
        event.preventDefault();
    }
  });
});
