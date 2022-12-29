const mongoose = require("mongoose")

const schema = mongoose.Schema
const taskSchema = new schema({
    activity: { type: String },
    status: { type: String },
    time: { type: String },
    action: { type: String },
    timetaken: { type: String },
    ref: { type: String }
})

let Task = mongoose.model("todotask1", taskSchema);
module.exports = Task