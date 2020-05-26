module.exports = function (err, req, res, next) {
  let emailErrorMessage = "Cette addresse est associée à un autre compte";
  if (err.message.includes(emailErrorMessage))
    res.status(400).send(emailErrorMessage);
  else res.status(500).send("Something failed");
};
