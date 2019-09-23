//Ejemplo de pruebas con jest

//Se puede usar npm test --watchAll para que jest escuche los cambios y corra las pruebas cada que se guarde el archivo (similar a nodemon)

describe('Prueba', () => {
    describe('Suma', () => {
        it('Suma dos numeros', () => {
            const suma = (a, b) => {
                return a + b;
            }

            expect(suma(1, 2)).toEqual(3);
        })
    })

    describe('Other Suite', () => {

    })
})