import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MotorhomeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Motorhome', MotorhomeSchema);
