// ptQvw*8PdgWQsZH //  Ihor

const mongoose=require("mongoose");
const app = require('./app');
const {DB_HOST}=process.env;
console.log(process.env.DB_HOST);
// const DB_HOST = "mongodb+srv://Ihor:ptQvw*8PdgWQsZH@cluster0.qbxqqlz.mongodb.net/contacts_friends?retryWrites=true&w=majority";

mongoose.set("strictQuery",true);

mongoose.connect(DB_HOST)
.then(()=>{
  app.listen(3000)
  console.log("Database connect success")
})
.catch(error=> {
  console.log(error.message);
  process.exit(1);
});




