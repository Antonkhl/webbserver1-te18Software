const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const nameSchema = new mongoose.Schema({
    name: String,
  });
  
  const Name = mongoose.model('Name', personSchema);
  
  exports.storeName = (name) => {
      var name = new Name({
          name: name, 
         })
     
       name.save(()=>{
         console.log("Successfully saved person in database!")
       })
  }