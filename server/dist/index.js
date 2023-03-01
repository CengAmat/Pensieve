"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const posts_1 = __importDefault(require("./routes/posts"));
const app = (0, express_1.default)();
app.listen(3000);
app.use("/posts", posts_1.default);
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use((0, cors_1.default)());
const CONNECTION_URL = "mongodb+srv://cengamat:cengamat@cluster-2g47mmc1.sridj.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;
mongoose_1.default
    .connect(CONNECTION_URL, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
// mongoose.set("useFindAndModify", false);
mongoose_1.default.set("strictQuery", false);
// https://www.mongodb.com/cloud/atlas
