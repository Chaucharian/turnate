export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  fetch("https://www.marplacode.com/sendEmail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body.email),
  })
    .then(() => {
      res.statusCode = 200;
      res.send(
        JSON.stringify({
          success: true,
          message: "¡Envio exitoso! en breve nos estaremos comunicando contigo",
        })
      );
    })
    .catch(() => {
      res.statusCode = 500;
      res.send(
        JSON.stringify({
          success: false,
          message: "Ocurrio un error, intenta mas tarde",
        })
      );
    });
};
