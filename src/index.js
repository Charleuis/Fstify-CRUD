import Fastify from "fastify";
import mongoose from "mongoose";

const fastify = Fastify({
  logger: true,
});

const userRoutes = import("./routes/userRoute.js");

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo db connected"))
  .catch((err) => console.log(err));

fastify.register(userRoutes, { prefix: "/user" });

try {
  fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
