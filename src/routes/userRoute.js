const userDetails = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          password: { type: "string", minLength: 8 },
          phone: { type: "string", pattern: `[0-9]{10}$` },
        },
      },
      require: true,
    },
  },
};
function userRoute(fastify, options, done) {
  fastify.get("/signin", (req, replay) => {
    replay.code(200).send({ message: "hai welcome" });
  });
  // fastify.post("/signup", userDetails, (req, replay) => {
  //   let { name, email, password, phone } = req.body;
  //   if(email)
  // });
  done();
}
export default userRoute;
