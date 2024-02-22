import Fastify from "fastify";
// import mongoose from "mongoose";

const fastify = Fastify({
  logger: true,
});

const userRoutes = import("./routes/userRoute.js");
// fastify.register(async (fastify, options) => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/users", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error", err);
//   }
// });

fastify.register(userRoutes, { prefix: "/user" });

try {
  fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
