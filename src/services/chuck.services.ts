import axios from 'axios'

interface ChuckNorisResponse{
    icon_url: string;
    id: string;
    url:string; 
    value:string; //chiste 
}

export const getRandomJoke = async (): Promise<string> => {
    
    //hace la llamada GET a la API 
    const response = await axios.get<ChuckNorisResponse>('https://api.chucknorris.io/jokes/random');
    //devuelve unicamente el chiste 

   // console.log('respuesta ', response.data.value); 

    return response.data.value;
}