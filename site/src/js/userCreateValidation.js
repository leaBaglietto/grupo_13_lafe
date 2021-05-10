window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation");

    const form = document.getElementById('form');
    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const first_nameValue = first_name.nodeValue.trim();
        const last_nameValue = last_name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (first_nameValue === '') {
            setErrorFor(first_name, 'Aca te pido tu nombre')
        } else {
            setSuccessFor(first_name)
        };

        if (last_nameValue === '') {
            setErrorFor(last_name, 'Aca te pido tu Apellido')
        } else {
            setSuccessFor(last_name);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Dale amigo dejate un mail')
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Dale amigo esto no es un mail valido!!! ');
        } else {
            setSuccessFor(email);
        }
        if (passwordValue === '') {
            setErrorFor(password, 'Metele una contraseña')
        } else {
            setSuccessFor(password)
        };

        if (password2Value === '') {
            setErrorFor(password2, 'Metele una contraseña')
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Amigo no te coinciden las contraseñas')
        } else {
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