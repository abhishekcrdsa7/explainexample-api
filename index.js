const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const courseRoutes = require("./routes/course");
const subjectRoutes = require("./routes/subject");
const blogRoutes = require("./routes/blog");
require("./cron");

mongoose.connect(
    "mongodb+srv://exex:AbHiShEk@7@explainexample-jhzvz.mongodb.net/ExplainExampleDB?retryWrites=true&w=majority",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/course", courseRoutes);
app.use("/course/:courseId/subject", subjectRoutes);
app.use("/course/:courseId/subject/:subjectId/blog", blogRoutes);
app.use("/", indexRoutes);
app.listen(process.env.PORT || 8080);