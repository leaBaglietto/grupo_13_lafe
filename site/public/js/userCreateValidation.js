window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation");
    console.log ("estamos en validaciones")

    const form = document.getElementById('form');
    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    let first_nameSuccess = false; /* hacer esto con todas las variables de arriba */
    let last_nameSuccess = false;
    let emailSuccess = false;
    let passwordSuccess = false;
    let password2Success = false;


    form.addEventListener("submit", function (e) {
        if(first_nameSuccess == true) { }
        else { 
            e.preventDefault();
            checkInputs();
        }
 
    });

    function checkInputs() { 
        const first_nameValue = first_name.value.trim(); /* TRIM Elimina cualquier caracter vacio al principio o final del input */
        const last_nameValue = last_name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

       

        if (first_nameValue === '') {
            setErrorFor(first_name, 'Aca te pido tu nombre');
            first_nameSuccess = false; /* hacer esto con todas las variables de arriba */
        } else {
            first_nameSuccess = true; /* hacer esto con todas las variables de arriba */
            setSuccessFor(first_name)
        };

        if (last_nameValue === '') {
            setErrorFor(last_name, 'Aca te pido tu Apellido');
            last_nameSuccess = false;
        } else {
            last_nameSuccess = true;
            setSuccessFor(last_name);
        }

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

        if (password2Value === '') {
            setErrorFor(password2, 'Tu contraseña no estaria coincidiendo');
            password2Success = false;
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Tu contraseña no estaria coincidiendo');
            password2Success = false;
        } else {
            password2Success = true;
            setSuccessFor(password2);
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