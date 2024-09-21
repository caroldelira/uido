import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Configuração para enviar email
    emailjs.send('service_9t87v7r', 'template_uido1', formData, 'SuCEIpncnAmirYFo2')
      .then((response) => {
        alert('Email enviado com sucesso!');
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        alert('Erro ao enviar o email.');
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      });
  };

  return (
  <>
    <h2 className='tituloForm' id='orcamento'>Solicite um orçamento!</h2>
      
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor="name">Nome:</label>
        <input
          className='inputText'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
      />

      <label htmlFor="email">Email:</label>
        <input
          className='inputText'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
      />

      <label htmlFor="message">Mensagem:</label>
        <textarea
          className='inputTextarea'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
      ></textarea>

      <button type="submit" className='buttonForm'>Enviar Email</button>
      </form>
  </>
  );
};
