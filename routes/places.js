var express = require('express');
var router = express.Router();

require('../models/connection');
const Places = require('../models/places');
//const { checkBody } = require('../modules/checkBody');


router.post('/', (req, res) => {
    const newPlaces = new Places({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });

      newPlaces.save().then(palces => {
        res.json({ result: true, palces });
      });

})

router.get('/:nickname', (req, res) => {
    Places.find({nickname : req.params.nickname}).then(places =>{
        res.json({result : true, places})
    })
})

router.delete('/', (req, res) => {
    Places.findOne({nickname: req.body.nickname, name: req.body.name}).then(data => {
        if (data){
            Places.deleteOne({nickname: req.body.nickname, name: req.body.name}).then(data =>{
            res.json({result : true})
          })
        }
    })
})


 module.exports = router