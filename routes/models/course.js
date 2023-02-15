const mongoose = require('mongoose');
const {categorySchema} = require('./category');

const Course = mongoose.model('Courses', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  category: { 
    type: categorySchema,  
    required: true
  },
  trainer: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive'],
    required: true
  }
}));


exports.Course = Course; 