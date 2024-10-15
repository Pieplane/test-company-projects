import axios from "axios";

async function fetchProjects() {
    try{
        const response = await axios.get('/api/projects');
        return response;
    }catch(error){
        console.error('Ошибка при получении списка проектов', error);
    }
}

async function fetchCategories() {
    try{
        const response = await axios.get('/api/project-categories');
        return response;
    }catch(error){
        console.error('Ошибка при получении списка категорий', error);
    }
}

export {fetchProjects, fetchCategories};