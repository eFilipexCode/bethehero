const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },
    async create(req, res) {
        const { title, description, value } = req.body;
        console.log(req.body);

        const ong_id = req.headers.authorization;

        const result = await connection('incidents').insert({
            ong_id,
            title,
            description,
            value
        });

        return res.json({ id: result[0] });
    },
    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        console.log(ong_id, incident.ong_id);

        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: "Operation not permited." });
        };
        await connection('incidents').delete('*').where('id', id);
        return res.status(204).send();
    },
};