import {Schema, model, Document } from 'mongoose'


const schema = new Schema ({
    title: String,
    description: String,
    tecnologia: String,
    fecha:String,
    imagePath: String,
    vacuna : {
        type: String,
        ref: 'Vacuna'
         }
});

interface IPhoto extends Document { //Se trabaja en TypeScript

    title: string;
    description: string;
    imagePath: string;
    tecnologia: string;
    fecha:string;
    vacuna:string;
} 

export default model<IPhoto>('Photo', schema);