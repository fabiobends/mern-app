import Axios from 'axios';
import { PORT } from './config';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// schema for the database
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

// Datatype defined
const User = mongoose.model('User', userSchema);

const url = `http://localhost:${PORT}/`;

export const createUser = () => {

  const dummy = {
    name: 'Fábio',
    lastname: 'Ribeiro',
    age: 40
  }


}