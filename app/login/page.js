"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleFormSubmit(event) {
    event.preventDefault();
    
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle login errors
        console.error('Login failed');
      }
    })
    .catch(error => {
      console.error('An error occurred during login:', error);
    });
  }

  return (
    <section className="mt-8 lg:mx-40">
      <h1 className="text-center text-primary_dark text-2xl md:text-4xl">
        Вход
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Почта</span>
          <input type="email" name="email" placeholder="podgoroy@example.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
        </label>
        <label>
          <span>Пароль</span>
          <input type="password" name="password" placeholder="•••••••••" value={password} onChange={ev => setPassword(ev.target.value)}/>
        </label>
        <button type="submit" className="submit_button">Войти</button>
      </form>
    </section>
  );
}