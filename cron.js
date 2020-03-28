const cron = require('node-cron');
const axios = require("axios");
cron.schedule("*/29 * * * *", () => {
    axios.get("https://exexserver.herokuapp.com/course")
})