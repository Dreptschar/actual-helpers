const { CronJob } = require('cron');
const {sync_bank} = require("./sync-banks");

const job = new CronJob(
    '0 6 * * *', // cronTime
    function () {
        sync_bank
    }, // onTick
    null, // onComplete
    true, // start
    'Europe/Berlin' // timeZone
);