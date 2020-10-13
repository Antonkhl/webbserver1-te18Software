const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


const catSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number
  });
  
  const Cat = mongoose.model('Cat', catSchema);
  
  
exports.storeCat = (name, species, age) => {
var cat = new Cat({
name: name,
species: species,
age: age

})

cat.save(()=>{
    console.log("sucesfully saved person in database!")
})

}


  