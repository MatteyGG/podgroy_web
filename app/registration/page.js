"use client";
import { useState } from "react";

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    fetch('/api/registration', {method: 'POST', body: JSON.stringify({email, password})})
    headers: {'Content-Type', 'application/json'}
  }
  return (
    <section className="mt-8 lg:mx-40">
      <h1 className="text-center text-primary_dark text-2xl md:text-4xl">
        Регистрация
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
        <button type="submit" className="submit_button">Зарегистрироваться</button>
      </form>
    </section>
  );
}
