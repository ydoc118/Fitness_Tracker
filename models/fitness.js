const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter type of excersize"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter name of excersize"
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
        required: "Enter duration of excersize"
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;