const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const courseRoutes = require("./routes/course");
const subjectRoutes = require("./routes/subject");
const blogRoutes = require("./routes/blog");
const subscribeRoutes = require("./routes/subscribe");
dotenv.config();
const user = process.env.user;
const password = process.env.password;
mongoose.connect(
    `mongodb+srv://exex:${password}@${user}-jhzvz.mongodb.net/ExplainExampleDB?retryWrites=true&w=majority`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/subscribe", subscribeRoutes);
app.use("/course", courseRoutes);
app.use("/course/:courseId/subject", subjectRoutes);
app.use("/course/:courseId/subject/:subjectId/blog", blogRoutes);
app.use("/", indexRoutes);
app.listen(80);