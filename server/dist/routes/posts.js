"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const router = (0, express_1.Router)();
router.get("/", posts_1.getPosts);
router.post("/", posts_1.createPost);
exports.default = router;
