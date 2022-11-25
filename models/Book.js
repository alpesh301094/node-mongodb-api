const { Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
    title: {
      type : String,
      required : true
    },
    author: {
      type : String,
      required : true
    },
    created_at: String
  });

  module.exports = mongoose.model('Book', BookSchema,"book")