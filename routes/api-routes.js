const Workout = require("../models/fitness");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(results => {
        console.log(results);
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(results => {
        console.log(results);
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
        params.id,
        {
            $push: { exercises: body }
        },
        {
            new: true
        }
    ).then(results => {
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
})

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(results => {
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().then(results => {
        res.json(results);
        console.log("Range")
    }).catch(err => {
        res.json(err)
    });
});



module.exports = router;