const express = require("express");
const http = require("http");
const { initWebSocket } = require("./ws");
const app = express();
const server = http.createServer(app);
initWebSocket(server);
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
// Import routes
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
// Use routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
// Start the server
server.listen(port, () => {
  console.log(`NovaGadget server running on port ${port}`);
});
