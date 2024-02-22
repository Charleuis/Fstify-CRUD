import {
  getAllUsers,
  signin,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

async function userRoute(fastify, options) {
  fastify.get("/", getAllUsers);
  fastify.post("/:id", signin);
  fastify.post("/", createUser);
  fastify.put("/:id", updateUser);
  fastify.delete("/:id", deleteUser);
}

export default userRoute;
