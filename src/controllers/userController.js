// const userDetails = {
//   schema: {
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           name: { type: "string" },
//           email: { type: "string" },
//           password: { type: "string", minLength: 8 },
//           phone: { type: "string", pattern: `[0-9]{10}$` },
//         },
//       },
//       require: true,
//     },
//   },
// };

export async function getAllUsers(request, reply) {
  try {
    reply.send("not implemented yet");
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
