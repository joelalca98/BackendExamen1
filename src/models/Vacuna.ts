import {Schema, model, Document } from 'mongoose'


const schema = new Schema ({
    name: String,
    apellido: String,
});

interface IVacuna extends Document { //Se trabaja en TypeScript

    name: string;
    apellido: string;
} 

export default model<IVacuna>('Vacuna', schema);