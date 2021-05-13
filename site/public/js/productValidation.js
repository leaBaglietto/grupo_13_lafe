window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation");
    console.log ("estamos en validaciones")

    const form = document.getElementById('form');
    const product_name = document.getElementById('product_name');
    const brand = document.getElementById('brand');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const image = document.getElementById('image');

    let product_nameSuccess = false; /* hacer esto con todas las variables de arriba */
    let brandSuccess = false;
    let priceSuccess = false;
    let descriptionSuccess = false;
    let imageSuccess = false;


    form.addEventListener("submit", function (e) {
        if(product_nameSuccess == true) { }
        else { 
            e.preventDefault();
            checkInputs();
        }
 
    });

    function checkInputs() { 
        const product_nameValue = product_name.value.trim(); /* TRIM Elimina cualquier caracter vacio al principio o final del input */
        const brandValue = brand.value.trim();
        const priceValue = price.value.trim();
        const descriptionValue = description.value.trim();
        const imageValue = image.value.trim();

       

        if (product_nameValue === '') {
            setErrorFor(product_name, 'Ponele nombre al producto');
            product_nameSuccess = false; /* hacer esto con todas las variables de arriba */
        } else {
            product_nameSuccess = true; /* hacer esto con todas las variables de arriba */
            setSuccessFor(product_name)
        };

        if (brandValue === '') {
            setErrorFor(brand, 'y la marca?? seguro es chino');
           brandSuccess = false;
        } else {
           brandSuccess = true;
            setSuccessFor(brand);
        };

        if (priceValue === '') {
            setErrorFor(price, 'Precio por favor!!');
           priceSuccess = false;
        } else {
           priceSuccess = true;
            setSuccessFor(price);
        };
        if (descriptionValue === '') {
            descriptionSuccess = false;
            setErrorFor(description, 'Dale contale un poco a la gente que es el producto');
        } else {
            descriptionSuccess = true;
            setSuccessFor(description);
        };

        if (imageValue === '') {
            imageSuccess = false;
            setErrorFor(image, 'Pone una imagen y mostralo al mundo');
        } else {
            imageSuccess = true;
            setSuccessFor(image);
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