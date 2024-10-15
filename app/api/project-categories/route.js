import axios from "axios";

export const GET = async (request) => {
    try{
        const response = await axios.get('https://api.test.cyberia.studio/api/v1/project-categories');
        return new Response(JSON.stringify(response.data), {status: 200, headers: {'Content-Type' : 'application/json'}});
    } catch (error){
        console.error('Ошибка при получении данных о категориях проектов', error);
        return new Response(JSON.stringify({error: 'Ошибка сервера'}), {status: 500})
    };
    
}