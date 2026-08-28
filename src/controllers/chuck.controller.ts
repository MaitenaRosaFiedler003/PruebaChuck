import { Request,Response } from 'express'; 
import {getRandomJoke} from '../services/chuck.services.ts'; 


export const getJokeHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const joke = await getRandomJoke(); //llama a la funcion del service que pide a la api el chiste 
    res.json({   //convierte el objeto de respuesta en formato js 
      //success: true,
      data: joke
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el chiste de Chuck Norris'
    });
  }
};