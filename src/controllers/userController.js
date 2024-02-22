import User from "../model/userModel.js";

export async function getAllUsers(request, reply) {
  try {
    const users = await User.find();
    reply.send(users);
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function signin(request, reply) {
  try {
    reply.send("not implemented yet");
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function createUser(request, reply) {
  try {
    reply.send("not implemented yet");
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function updateUser(request, reply) {
  try {
    reply.send("not implemented yet");
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function deleteUser(request, reply) {
  try {
    reply.send("not implemented yet");
  } catch (err) {
    reply.status(500).send(err);
  }
}

// module.export = {
//   getAllUsers,
//   signin,
//   createUser,
//   updateUser,
//   deleteUser,
// };
