const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number   
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
        }
    }]   
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;