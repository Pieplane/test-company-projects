import axios from "axios";

export const POST = async (request) => {
    try{
        const body = await request.json();

        const response = await axios.post('https://api.test.cyberia.studio/api/v1/feedbacks', body);
        return new Response(JSON.stringify(response.data), {status: 200, headers: {'Content-Type' : 'application/json'}});
    } catch(error){
        console.error('Ошибка при отправке обратной связи', error);
        return new Response(JSON.stringify({error: 'Ошибка сервера'}), {status: 500,});
    }
    
};