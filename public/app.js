const chistesElement = document.getElementById('chistes'); 

async function cargarChiste() {
    try{
        const response = await fetch('/api/chiste');
        const data = await response.json();
        chistesElement.textContent = data.data; // según tu controller, el chiste viene en data.data
    } catch (error) {
    chistesElement.textContent = 'No se pudo cargar el chiste';
    console.error(error);
    }
}

cargarChiste();