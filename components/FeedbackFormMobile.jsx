'use client'

import React from 'react';
import '../assets/styles/feedbackFormMobile.css';
import { useState } from 'react';
import { useFeedbackFormik } from '@/utils/feedBackFormik';

const FeedbackFormMobile = () => {
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
  const formik = useFeedbackFormik(true);
  return (
    <form onSubmit={formik.handleSubmit} className="feedback__mobile--form">

        <figure className='feedback__mobile--logo_group'>
            <img src='/images/Group 1347.png' alt='subtract' />
        </figure>

        <h1 className='feedback__mobile--title'>Расскажите
        о вашем проекте</h1>

        <figure className='feedback__mobile--subtract_name'>
          <input
            type="text"
            name="name"
            className='feedback__mobile--input'
            placeholder="Ваше имя*"
            {...formik.getFieldProps('name')}
            onFocus={() => handleFocus('name')}
            onBlur={(e) => handleBlur(e, 'name')}
          />
        {showError.name && formik.touched.name && formik.errors.name && (
          <figcaption className="feedback__mobile--error_message">{formik.errors.name}</figcaption>
        )}
      </figure>

      <figure className='feedback__mobile--subtract_email'>
        <input
          type="email"
          name="email"
          className='feedback__mobile--input'
          placeholder="Email*"
          {...formik.getFieldProps('email')}
          onFocus={() => handleFocus('email')}
          onBlur={(e) => handleBlur(e, 'email')}
        />
        {showError.email && formik.touched.email && formik.errors.email && (
          <figcaption className="feedback__mobile--error_message">{formik.errors.email}</figcaption>
        )}
      </figure>

      <figure className='feedback__mobile--subtract_phone'>
        <input
          type="phone"
          name="phone"
          className='feedback__mobile--input'
          placeholder="Телефон*"
          {...formik.getFieldProps('phone')}
          onFocus={() => handleFocus('phone')}
          onBlur={(e) => handleBlur(e, 'phone')}
        />
        {showError.phone && formik.touched.phone && formik.errors.phone && (
          <figcaption className="feedback__mobile--error_message">{formik.errors.phone}</figcaption>
        )}
      </figure>

      <figure className='feedback__mobile--subtract_message'>
        <textarea
          type="message"
          name="message"
          className='feedback__mobile--textarea'
          placeholder="Сообщение*"
          {...formik.getFieldProps('message')}
        />
      </figure>

      <button type="submit" className='feedback__mobile--submit'>
        <h1 className='feedback__mobile--submit_text'>
            Отправить
        </h1>
      </button>

      <p className='feedback__mobile--warning'>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
    </form>
  );};

  export default FeedbackFormMobile;