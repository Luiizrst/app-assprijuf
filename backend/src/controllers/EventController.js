const Event = require('../models/Event');

module.exports = {

    async index(request, response) {
        try {
            const events = await Event.find().sort({ orderDate: 0 });

            return response.json(events);
        } catch (err) {
            return response.status(400).send("Falha no servidor");
        }
    },

    async store(request, response) {
        try {
            const {
                note,
                start,
                dateView,
                duration,
                durationView,
            } = request.body;

            const event = await Event.create({
                note,
                start: start,
                dateView,
                duration,
                durationView,
                orderDate: new Date(start)
            });

            return response.json(event);
        } catch (err) {
            return response.status(400).send("Falha no servidor");
        }
    },

    async show(request, response) {
        try {
            const event = await Event.findById(request.params._id);

            return response.json(event);
        } catch (err) {
            return response.status(400).send("Falha no servidor");
        }
    },

    async update(request, response) {
        try {
            const event = await Event.findByIdAndUpdate(request.params._id, request.body, { new: true });

            return response.json(event);
        } catch (err) {
            return response.status(400).send("Falha no servidor");
        }
    },

    async destroy(request, response) {
        try {
            await Event.findByIdAndDelete(request.params._id);

            return response.send("Evento deletado!");
        } catch (err) {
            return response.status(400).send("Falha no servidor");
        }
    },
}