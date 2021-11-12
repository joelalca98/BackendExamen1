import {Request, Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import Photo from '../models/Photo';

export async function getPhotos(req: Request, res: Response) : Promise<Response> {

    const photos = await Photo.find();
    return res.json(photos);

}
//Obtener la foto
export async function getPhoto (req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const photo = await Photo.findById(id);
    return res.json(photo);
}
//Crea una nueva foto
export async function createPhoto(req: Request, res : Response) : Promise<Response> {
    const {title, description, tecnologia, fecha, vacuna} = req.body;
    console.log(req.file?.path)
    const newPhoto = {
        title: title,
        description: description,
        tecnologia:tecnologia,
        fecha:fecha,
        imagePath: req.file?.path,
        vacuna:vacuna,
    };
    const photo = new Photo (newPhoto);
    await photo.save();
    return res.json({
        message : 'Foto subida correctamente',
        photo
    })
};  //Elimina la información pero no la foto
export async function deletePhoto (req: Request, res: Response) : Promise <Response> {
    const {id} = req.params;
    const photo = await Photo.findByIdAndRemove(id);

    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }

    return res.json({
        message: 'Foto Eliminada',
        photo
    })
}

//Modifica la foto
export async function updatePhoto (req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const {title, description, tecnologia, fecha, vacuna} = req.body;
    console.log(req.body)
    const updatePhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description,
        tecnologia,
        fecha,
        vacuna
    });
    return res.json({
        message: "Modificado correctamente",
        updatePhoto
    })
}
