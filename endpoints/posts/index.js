const handlers = ({ axios }) => ({
    post: async(req, res) => {

        //jsonPlaceHolder GET devuelve una lista de 10 usuarios
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

        //Buscamos el usuario del req.body en la lista anterior, y guardamos el resultado
        const found = users.find(x => x.id === req.body.userId);
        if (found) {
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body)
            return res.status(201).send(data)
        }
        res.sendStatus(400)
    }
})

module.exports = handlers