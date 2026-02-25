const verifyAdmin = (req, res, next) => {
  console.log("ROLE CHECK:", req.user.role);

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin only",
      actualRole: req.user.role
    });
  }

  next();
};

module.exports = verifyAdmin;