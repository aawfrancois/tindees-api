import {Router} from 'express';
import Category from '../models/category';
import dotenv from 'dotenv';

dotenv.config();

let api = Router();

api.get("/", async (request, response) => {
    try {
        let category = await Category.findAll()
        console.log(category)
        if (category) {
            const categoryResult = []
            category.forEach(val =>{
                categoryResult.push({id : val.id , libelle : val.libelle})
            })
            response.status(200).json({data: categoryResult});
        } else {
            response.status(404).send();
        }
    } catch (error) {
        console.log(error)
        response.status(400).json({
            err: error.message
        });
    }
});

export default api
