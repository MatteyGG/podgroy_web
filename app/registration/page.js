export default function registrationPage() {
  return (
    <section className="mt-8 lg:mx-40">
      <h1 className="text-center text-primary_dark text-2xl md:text-4xl">
        Регистрация
      </h1>
      <form >
        <label className="grid grid-cols-1 ">
          <span>Имя</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Почта</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Пароль</span>
          <input type="password" name="password" />
        </label>
        <button type="submit" className="submit_button">Зарегистрироваться</button>
      </form>
    </section>
  );
}
