"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const postMessage_1 = __importDefault(require("../models/postMessage"));
const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage_1.default.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
    }
};
exports.getPosts = getPosts;
const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage_1.default(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(409).json({ message: error.message });
        }
    }
};
exports.createPost = createPost;
