"use client";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation"
import HeaderPage from "../components/headerComp";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    const signInData = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (signInData?.error) {
      console.error(signInData.error);
    } else {
      router.push('/');
      router.refresh();
    }
  }

  return (
    <section className="mt-8 lg:mx-40">
      <HeaderPage text="Войти" />
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Почта</span>
          <input type="email" name="email" placeholder="podgoroy@example.com" autoComplete="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
        </label>
        <label>
          <span>Пароль</span>
          <input type="password" name="password" autoComplete="password" placeholder="•••••••••" value={password} onChange={ev => setPassword(ev.target.value)}/>
        </label>
        <button type="submit" className="submit_button">Войти</button>
      </form>
    </section>
  );
}