'use client'

import React from 'react'
import Link from 'next/link'
import '../assets/styles/cases.css';
import { useState, useEffect } from 'react';
import { fetchProjects, fetchCategories } from '@/utils/requests';

const Cases = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getProjects = async () => {
            const response = await fetchProjects();
            if(response && response.data){
                setProjects(response.data.items);
            }
            
        }
        const getCategories = async () => {
            const response = await fetchCategories();
            if(response && response.data){
                setCategories(response.data.items);
            }  
        }

        getProjects();
        getCategories();
    }, []);




  return (
    <main>
        <div className='casses__desktop--page'>

            <section className='cases__desktop--text_nav cases__desktop--main_pos'><Link href='/'>Главная</Link> / Кейсы</section>

            <section className='cases__desktop--text_title cases__desktop--cases_pos'>Кейсы</section>

            <section className='cases__desktop--categories cases__desktop--categories_grid'>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category.id} className='cases__desktop--categories_item'>
                            <div className='cases__desktop--categories_text'>{category.name}</div>
                        </div>
                    ))
                    ) : <p>Загрузка категорий</p>}
            </section>

            <section className='cases__desktop--projects_container'>
                <div className='cases__desktop--projects_grid'>
                    {projects.length > 0 ? (
                        projects.map((project) => (
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
                ) : (<p>Загрузка проектов</p>)}
                </div>
            </section>


        </div>
    </main>
    
  )
}

export default Cases