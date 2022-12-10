const fastify = require("fastify")({
  logger: true,
});
const tasksRoutes = require("./routes/tasks.routes");
const connectToMongoDB = require('./utils/mongoose');
connectToMongoDB();

fastify.get("/", (request, reply) => {
  reply.redirect("/tasks");
});

tasksRoutes.forEach((route) =>{
    fastify.route(route);
});

const start = async () => {
  await fastify.listen({ port: 3000 });
  fastify.log.info(`Server running on ${fastify.server.address().port}`);
};

start();
