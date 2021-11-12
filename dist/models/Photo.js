"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    tecnologia: String,
    fecha: String,
    imagePath: String,
    vacuna: {
        type: String,
        ref: 'Vacuna'
    }
});
exports.default = (0, mongoose_1.model)('Photo', schema);
