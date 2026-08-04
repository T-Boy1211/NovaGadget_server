const verifyAuth = (req, res, next) => {
  const { email, password } = req.body;

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*₤฿₩₹€£]).{6,}$/;
  const phoneNumberReg = /^[0-9]{11}$/;

  if (!emailReg.test(email)) {
    res.status(400).json({ message: "Invalid email" });
  }
  if (!passwordReg.test(password)) {
    res.status(400).json({ message: "Not strong enough" });
  }
  if (!phoneNumberReg.test(req.body.phoneNumber)) {
    res.status(400).json({ message: "Invalid phone number" });
  }
  next();
};

module.exports = verifyAuth;
