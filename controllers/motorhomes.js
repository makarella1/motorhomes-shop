import Motorhome from '../models/motorhome.js';

export const getMotorhomes = async (req, res) => {
  try {
    const motorhomes = await Motorhome.find();
    res.status(200).json(motorhomes);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong... Try again' });
  }
};

export const getMotorhome = async (req, res) => {
  try {
    const { id } = req.params;

    const motorhome = await Motorhome.findById(id);
    res.status(200).json(motorhome);
  } catch (error) {
    res.status(400).json({ message: "Couldn't find a motorhome... Try again" });
  }
};

export const createMotorhome = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = {
      message: 'Name is required!',
    };
  }

  if (!req.body.price) {
    errors.price = {
      message: 'Price is required!',
    };
  }

  if (!req.body.description || req.body.description.length > 700) {
    errors.description = {
      message: "Description is missing or it's too long",
    };
  }

  if (!req.body.capacity || req.body.capacity > 99 || req.body.capacity < 1) {
    errors.capacity = {
      message: 'Capacity is missing or the number you provided is invalid',
    };
  }

  if (!req.file) {
    errors.file = {
      message: 'Photo is required!',
    };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, capacity } = req.body;

    const motorhome = await Motorhome.create({
      name,
      price,
      description,
      capacity,
      image: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });
    res.status(201).json(motorhome);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't create a motorhome... Try again" });
  }
};
