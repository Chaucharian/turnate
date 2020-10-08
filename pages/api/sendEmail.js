export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  fetch("https://www.marplacode.com/sendEmail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: req.body.email }),
  })
    .then(() => {
      res.statusCode = 200;
      res.send(
        JSON.stringify({
          success: true,
          message: "En breve nos estaremos comunicando.",
        })
      );
    })
    .catch(() => {
      res.statusCode = 500;
      res.send(
        JSON.stringify({
          success: false,
          message: "Intenta mas tarde.",
        })
      );
    });
};
