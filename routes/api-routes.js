const Workout = require("../models/fitness");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(results => {
        console.log(results);
        res.json(results);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(results => {
        console.log(results);
        res.json(results);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
    let id = req.params.id;
    Workout.put()
})

module.exports = router;