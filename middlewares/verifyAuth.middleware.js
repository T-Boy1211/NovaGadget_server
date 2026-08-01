const verifyAuth = (req, res, next) => {
  const { email, password } = req.body;

  const emailReg = "";
  const passwordReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*₤฿₩₹€£]).{6,}$/;

  if (emailReg.text(email)) {
    res.status(400).json({ message: "Invalid email" });
  }
  if (passwordReg.text(password)) {
    res.status(400).json({ message: "Not strong enough" });
  }
  next();
};

module.exports = verifyAuth;
