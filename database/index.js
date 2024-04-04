import 'dotenv/config'
import mongoose from 'mongoose';

const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_AUTH_DB = process.env.DB_AUTH_DB;

console.log(DB_USER);
console.log(DB_PWD);
console.log(DB_AUTH_DB);


const connection = mongoose.connect('mongodb://127.0.0.1:27017/got2go', {
  user: DB_USER,
  pass: DB_PWD,
  authSource: DB_AUTH_DB
});

const restroomSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: {
      type: Number,
      index: true
    },
    lng: {
      type: Number,
      index: true
    },
  },
  category: String,
  customersOnly: Boolean,
  toiletType: String,
  accessible: Boolean,
  keyRequired: Boolean,
  genders: [String],
  hours: String,
  cleanliness: Number,
  toiletPaper: Boolean,
  handwash: [String]
});

const Restroom = mongoose.model('Restroom', restroomSchema);

export default Restroom;
