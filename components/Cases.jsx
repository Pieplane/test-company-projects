'use client'

import React from 'react'
import Link from 'next/link'
import '../assets/styles/cases.css';
import { useState, useEffect } from 'react';
import { fetchProjects, fetchCategories } from '@/utils/requests';
import Spinner from './Spinner';
import FeedbackForm from './FeedbackForm';

const Cases = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeButtonId, setActiveButtonId] = useState(null);

    useEffect(()=>{
        const getProjects = async () => {
            const response = await fetchProjects();
            if(response && response.data){
                setProjects(response.data.items);
                setFilteredProjects(response.data.items);
            }
            
        }
        const getCategories = async () => {
            const response = await fetchCategories();
            if(response && response.data){
                setCategories(response.data.items);
            }
            setLoading(false);  
        }

        getProjects();
        getCategories();
    }, []);

        const handleFilterChange = (categoryId) => {
            const filtered = projects.filter((project) => project.categories.some((cat) => cat.id === categoryId));
            setFilteredProjects(filtered);
            setActiveButtonId(categoryId);
        };
        
        const resetFilter = () => {
            setFilteredProjects(projects); // Сброс фильтрации — показываем все проекты
            setActiveButtonId(null);
        };


  return (
        <main>
            <div className='casses__desktop--page'>

            <section className='cases__desktop--text_nav cases__desktop--main_pos'><Link href='/'>Главная</Link> / Кейсы</section>

            <section className='cases__desktop--text_title cases__desktop--cases_pos' onClick={resetFilter} style={{cursor: 'pointer'}}>Кейсы</section>

            <section className='cases__desktop--categories cases__desktop--categories_grid'>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category.id} className='cases__desktop--categories_item' onClick={() => handleFilterChange(category.id)} style={{ cursor: 'pointer',
                            backgroundColor: activeButtonId === category.id ? '#2D76F9' : '#313341',
                         }}
                        >
                            <div className='cases__desktop--categories_text'>{category.name}</div>
                        </div>
                    ))
                    ) : <p></p>}
            </section>

            <section className='cases__desktop--projects_container'>
                {loading ? (<Spinner loading={loading} />) :(
                    <div className='cases__desktop--projects_grid'>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                    <div className='cases__desktop--projects_item' key={project.id}>
                        <div className="cases__desktop--projects_mask">
                            <div className='cases__desktop--projects_component'>
                                <div className='cases__desktop--projects_group img'>
                                    <div className='cases__desktop--projects_fill'></div>
                                        <img src="/images/Group 35.png" alt="img"/>
                                    <div className='cases__desktop--project-name'>
                                        <h1>{project.title}</h1>
                                    </div>
                                </div>
                            </div> 
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                 ))
                ) : (<p></p>)}
                </div>)}
                
            </section>

            <FeedbackForm />
            </div>

            <div className='casses__mobile--page'> 
                <section className='cases__mobile--text_nav'><Link href='/'>Главная</Link> / Кейсы</section>

                <section className='cases__mobile--text_title' onClick={resetFilter} style={{cursor: 'pointer'}}>Кейсы</section>

                <section className='cases__mobile--categories cases__mobile--categories_grid'>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category.id} className='cases__mobile--categories_item' onClick={() => handleFilterChange(category.id)} style={{ cursor: 'pointer',
                            backgroundColor: activeButtonId === category.id ? '#2D76F9' : '#313341',
                         }}>
                            <div className='cases__mobile--categories_text'>{category.name}</div>
                        </div>
                    ))
                    ) : <p></p>}
                </section>


                <section className='cases__mobile--projects_container'>
                {loading ? (<Spinner loading={loading} />) :(
                    <div className='cases__mobile--projects_grid'>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div className='cases__mobile--projects_item' key={project.id}>
                                <div className="cases__mobile--projects_mask">
                                    <img src={project.image} alt={project.title} />
                                    <figure className='cases__mobile--item_group'>
                                        <img src="/images/Group 35_mobile.png" alt="img"/>
                                    </figure>
                                    
                                    <aside>
                                        <h1 className='cases__mobile--item_title'>{project.title}</h1>
                                        <p className='cases__mobile--item_description'>Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение и т.д.</p>
                                    </aside>
                                </div>
                    </div>
                 ))
                ) : (<p></p>)}
                </div>)}
                
            </section>



            </div>
        </main>
    
  )
}

export default Cases