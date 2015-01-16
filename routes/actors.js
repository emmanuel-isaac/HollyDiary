var express = require( 'express' );
var router = express.Router();
var Actor = require('../models/schema');

var bodyParser = require( 'body-parser' );
var parseUrlEncoded = bodyParser.urlencoded({extended: false});
var Actor = require('../models/schema');

var postAndPut = function (actorInfo) {
  var newActor = actorInfo;
  var dateOfBirth = {
    day: +newActor.day || "",
    month: +newActor.month || "",
    year: +newActor.year || ""
  };

  var movieFunction = function () {
    var movies;
    for (movie in newActor.movies) {
      movies = movie;
    }
    return movies;
  };
  var newActorObject = {
    name: newActor.name || "",
    dateOfBirth: [dateOfBirth] || "",
    sex: newActor.sex || "",
    movies: movieFunction(),
    rating: (+newActor.rating),
    lightSkinned: newActor.lightSkinned || false,
    about: newActor.about || ""
  };
  return newActorObject;
};

router.route('/')

.get(function (request, response) {
  response.json('Welcome to HollyDiary');
});


router.route('/actors')

.get(function (request, response) {
  Actor.find(function (err, actors) {
    response.json(actors);
  });
})

.post(parseUrlEncoded, function (request, response) {
  var newActor = request.body;
  var newActorObject = postAndPut(newActor);

  Actor.create(newActorObject, function (err, words) {
    if (err) {
      response.send(err);
    }

    Actor.find(function (err, actor) {
      response.json(actor);
    });
  });
});

router.route('/actors/:name')

.get(function (request, response) {
  var name = request.params.name;
  Actor.find({name: name}, function (err, actor) {
    if (actor[0]) {
      response.json(actor);
    } else response.sendStatus(400);
  });
});

router.route('/actors/:name')

.put(parseUrlEncoded, function (request, response) {
  var actor = request.params.name;
  var editedActor = request.body;

  console.log(postAndPut(editedActor));

  var newData = postAndPut(editedActor);

  Actor.update({name: actor}, newData, function (err, actor) {
    if (err) {
      response.send(err);
    } 

    response.json("Updated Successfully");
  });
})

.delete(parseUrlEncoded, function (request, response) {
  var act = request.params.name;

  Actor.find({name: act}, function (err, actor) {
    console.log(actor); 
    if (!actor[0]) {
      response.json("Actor not found");
    } else {
      Actor.remove({name: act}, function () {
        response.json("Successfully Deleted");
      })
    }
  });
});





module.exports = router;