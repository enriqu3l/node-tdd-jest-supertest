const handlers = ({ axios }) => ({
    get: async(req, res) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        res.status(200).send(data);
    },
    get1: async(req, res) => {
        const { id } = req.params;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        res.status(200).send(data);
    },
    post: async(req, res) => {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', req.body);

        res.status(201).send(data);
    },
    put: async(req, res) => {
        const { id } = req.params;
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, req.body);

        res.sendStatus(204) //El estatus code 204 significa: No hay contenido que retornar
    },
    delete: async(req, res) => {
        const { id } = req.params;
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        res.sendStatus(204);
    }
})

module.exports = handlers