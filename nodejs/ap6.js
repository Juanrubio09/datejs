const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('promesa cumplida');
        } else{
            reject('promesa rechazada');
        }
    }, 5000);
});

miPromesa.then((valor) => {
    console.log(valor);
});