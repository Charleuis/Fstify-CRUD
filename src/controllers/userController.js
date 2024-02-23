import User from "../model/userModel.js";
import bcrypt from "bcrypt";

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
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      reply.status(401).send("check the mail id");
    } else {
      const hasedPassword = await bcrypt.compare(password, user.password);
      if (hasedPassword) {
        reply.status(202).send("logged in sucessfully");
      } else {
        reply.status(404).send("Check the password  ");
      }
    }
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function createUser(request, reply) {
  try {
    const { name, email, password, phoneNumber } = request.body;
    const existing = await User.findOne({ email });
    if (!existing) {
      await bcrypt.hash(password, 10, function (err, hash) {
        User.create({ name, email, password: hash, phoneNumber });
      });
      reply.status(200).send("User Created Sucessfully");
    }
    reply.status(404).send("User Existing");
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function updateUser(request, reply) {
  try {
    let user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    reply.send(user);
  } catch (err) {
    reply.status(500).send(err);
  }
}
export async function deleteUser(request, reply) {
  try {
    await User.findByIdAndDelete(request.params.id);
    reply.status(204).send("");
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
