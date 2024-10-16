'use client'

import React from 'react';
import '../assets/styles/feedbackForm.css';
import { useState } from 'react';
import { useFeedbackFormik } from '@/utils/feedBackFormik';

const FeedbackForm = () => {
  const [showError, setShowError] = useState({
    name: false,
    email: false,
    phone: false,
  }); // Управление показом ошибки
  // Функция обработки фокуса
  const handleFocus = (field) => {
    setShowError(prev => ({ ...prev, [field]: false })); // Скрываем ошибку для конкретного поля
  };
  // Функция обработки потери фокуса
  const handleBlur = (e, field) => {
    formik.handleBlur(e); // Сохраняем стандартное поведение Formik при потере фокуса
    if (formik.errors[field] && formik.touched[field]) {
      setShowError(prev => ({ ...prev, [field]: true })); // Показываем ошибку для конкретного поля
    }
  };
  const formik = useFeedbackFormik(false);
  return (
      <form onSubmit={formik.handleSubmit} className="feedback__desktop--form"> 
        <section className='feedback__desktop--title_text'>
          <h1>Расскажите о вашем проекте:</h1>
        </section>


        <figure className='feedback__desktop--subtract_name'>
          <img src='/images/Subtract.png' alt='subtract' />
          <input
            type="text"
            name="name"
            className='feedback__input'
            {...formik.getFieldProps('name')}
            onFocus={() => handleFocus('name')}
            onBlur={(e) => handleBlur(e, 'name')}
          />
        {showError.name && formik.touched.name && formik.errors.name && (
          <figcaption className="feedback__error--message">{formik.errors.name}</figcaption>
        )}
      </figure>


      <figure className='feedback__desktop--subtract_email'>
        <img src='/images/Subtract.png' alt='subtract' />
        <input
          type="email"
          name="email"
          className='feedback__input'
          {...formik.getFieldProps('email')}
          onFocus={() => handleFocus('email')}
          onBlur={(e) => handleBlur(e, 'email')}
        />
        {showError.email && formik.touched.email && formik.errors.email && (
          <figcaption className="feedback__error--message">{formik.errors.email}</figcaption>
        )}
      </figure>


      <figure className='feedback__desktop--subtract_phone'>
        <img src='/images/Subtract.png' alt='subtract' />
        <input
          type="phone"
          name="phone"
          className='feedback__input'
          {...formik.getFieldProps('phone')}
          onFocus={() => handleFocus('phone')}
          onBlur={(e) => handleBlur(e, 'phone')}
        />
        {showError.phone && formik.touched.phone && formik.errors.phone && (
          <figcaption className="feedback__error--message">{formik.errors.phone}</figcaption>
        )}
      </figure>


      <figure className='feedback__desktop--subtract_message'>
        <img src='/images/Subtract-big.png' alt='subtract' />
        <textarea
          type="message"
          name="message"
          className='feedback__textarea--name'
          {...formik.getFieldProps('message')}
        />
      </figure>


      <section className='feedback__desktop--name_text'>
        <h1 className='feedback__desktop--name_pos'>Ваше имя*</h1>
      </section>

      <section className='feedback__desktop--email_text'>
        <h1 className='feedback__desktop--email_pos'>Email*</h1>
      </section>

      <section className='feedback__desktop--phone_text'>
        <h1 className='feedback__desktop--phone_pos'>Телефон*</h1>
      </section>

      <section className='feedback__desktop--message_text'>
        <h1 className='feedback__desktop--message_pos'>Сообщение*</h1>
      </section>

      <section className='feedback__desktop--consent_text'>
        <h1 className='feedback__desktop--consent_pos'>Согласие на обработку персональных данных*</h1>
      </section>

      <label>
        <input type="checkbox" name="consent" {...formik.getFieldProps('consent')} className='feedback__consent--wrapper' />
          <div className='feedback__consent--wrapper'>
            <div className="feedback__error--message feedback__error--message_consent" style={{ display: formik.touched.consent && formik.errors.consent ? 'block' : 'none' }}>
              {formik.errors.consent}
            </div> 
          </div>  
      </label>
      
  
      <button type="submit" className='feedback__desktop--submit_btn'>
        <h1 className='feedback__desktop--submit_text feedback__desktop--submit_pos'>
            Обсудить проект
        </h1>
      </button>
    </form>
  );
};
export default FeedbackForm;