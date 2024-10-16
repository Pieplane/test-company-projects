import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function useFeedbackFormik(isMobile) {
  return useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      ...(isMobile ? {} : { consent: false }),
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Ваше имя обязательно'),
      email: Yup.string().email('Неверный формат email').required('Email обязателен'),
      phone: Yup.string().matches(/^\+?\d{10,15}$/, 'Неверный формат телефона').required('Телефон обязателен'),
      message: Yup.string(),
      ...(isMobile ? {} : { consent: Yup.boolean().oneOf([true], 'Необходимо согласие на обработку персональных данных') }),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('/api/feedback', values);
        alert('Обратная связь успешно отправлена!');
        resetForm(); // Сброс формы после успешной отправки
      } catch (error) {
        alert('Ошибка при отправке обратной связи.');
        console.error('Error:', error);
      }
    }
  });
}

export { useFeedbackFormik };