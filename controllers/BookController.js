const { ObjectId } = require('mongodb');
const Book = require('../models/Book')

exports.index = async (req, res) => {
    const getData = await Book.find();
    res.json(getData);
}

exports.store = async (req, res) => {
    try {
        await Book.create(req.body);
        res.status(201).json(req.body)
    } catch (error) {
        res.json(error.errors);
    }
}

exports.getById = async (req, res) => {
    const _id = ObjectId(req.params.id);
    const book = await Book.find({_id});
    res.json(book)
}

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.updateOne({_id}, {$set : req.body})
    res.json({data : "Book updated."})
}

exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.deleteOne({_id});
    res.json({data : "Book deleted."})
}