"use client";
import { useState } from "react"
import { useRouter } from "next/navigation"
import HeaderPage from "../components/headerComp";

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    console.log({ email, password });
    const response = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    headers: {
      "Content-Type", "application/json";
    }
    if (response.ok) {
      router.push("/login");
    } else {
      console.error("Registration failed");
    }
  }


  return (
    <section className="mt-8 lg:mx-40">
      <HeaderPage text="Регистрация" />
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
