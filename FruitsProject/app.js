const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please enter a name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
},
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name : "Apple",
  rating: 7,
  review: "Great fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const Mango = new Fruit({
  name: "Mango",
  rating: 9,
  review: "Great fruit"
});

mango.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// const person = new Person({
//   name: "John",
//   age: 37
// });

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Succesfully update");
  }
});

person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best"
// });
//   const mango = new Fruit({
//     name: "mango",
//     rating: 10,
//     review: "The best"
// });
//
// // Fruit.insertMany([kiwi, mango], function(err){
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Saved!");
// //   }
// // });

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });


  }
});

// Fruit.updateOne({_id: "mongodbID"}, {name: "Peach"}, function(err) {
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Update success");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Deleted");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all");
//   }
// });
