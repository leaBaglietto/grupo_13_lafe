window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation");
    console.log ("estamos en validaciones")

    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let emailSuccess = false; /* hacer esto con todas las variables de arriba */
    let passwordSuccess = false;



    form.addEventListener("submit", function (e) {
        if(emailSuccess == true) { }
        else { 
            e.preventDefault();
            checkInputs();
        }
 
    });

    function checkInputs() { 
        const emailValue = email.value.trim(); /* TRIM Elimina cualquier caracter vacio al principio o final del input */
        const passwordValue = password.value.trim();
   

        if (emailValue === '') {
            setErrorFor(email, 'Dale amigo dejate un mail');
            emailSuccess = false;
        } else if (!isEmail(emailValue)) {
            emailSuccess = false;
            setErrorFor(email, 'Dale amigo esto no es un mail valido!!! ');
        } else {
            emailSuccess = true;
            setSuccessFor(email);
        }
        if (passwordValue === '') {
            passwordSuccess = false;
            setErrorFor(password, 'Tu contraseña debe tener minimo 4 caracteres');
        } else {
            passwordSuccess = true;
            setSuccessFor(password);
        };
 
        function setErrorFor(input, message) {
            const controlForm = input.parentElement;
            const small = controlForm.querySelector('small');
            controlForm.className = 'control-form error';
            small.innerText = message;
        }

        function setSuccessFor(input) {
            const controlForm = input.parentElement;
            controlForm.className = 'control-form success';
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        }
    }

});