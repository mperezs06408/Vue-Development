const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Whoops!');
        };
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappenTwo = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => resolve('True'),2000);
        } else {
            const err = new Error('Whoops!');
            reject(err);
        }
    });
};

somethingWillHappenTwo()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//¿Cómo ejecutar múltiples promesas al tiempo/ concatenadas

Promise.all([somethingWillHappen(),somethingWillHappenTwo()])
    .then(res => console.log(`Array: ${res}`));