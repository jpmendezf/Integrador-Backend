let modelImplement = require('./model')

implement = modelImplement.getImplements()


function saveImplements(req, res) { // función para guardar implemento
  implement.find( {typeImplement: req.body.typeImplement}, '-_id -__v', function (err, doc) {
    let Implement = new implement({
         typeImplement : req.body.typeImplement, category : req.body.category, quantity : req.body.quantity
    })
    Implement.save(function () {
      res.send({"message":"Implemento ingresado adecudamente"})
    })
     
  });
};

function getAllImplements (req, res) {
  implement.find({}, '-_id -__v', function (err, doc) {
    res.status(200).jsonp(doc)
  })
};


function deleteImplement(req, res){
  implement.findOneAndRemove({typeImplement:req.params.typeImplement}, function(err) {
    if(!err) {
        res.send({"message":"Implemento eliminado correctamente"});
    } 
  });
}

module.exports = { // Exporta todos los metodos
  saveImplements: saveImplements,
  getAllImplements: getAllImplements,
  deleteImplement: deleteImplement
}