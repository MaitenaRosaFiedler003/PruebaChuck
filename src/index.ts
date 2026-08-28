import express from 'express';
import { getJokeHandler } from './controllers/chuck.controller.ts';



const app = express(); //instancia del servidor creado con express 
const PORT = 3000; //escucha el puerto 3000

app.use(express.json());

//indica con cual url se hace las peticiones de los chistes 
app.get('/api/chiste', getJokeHandler);

app.get('/', (req, res) => {
  res.send('¡El servidor responde correctamente!');
});

app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});