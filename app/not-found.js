import Link from "next/link";
import HeaderPage from "./components/headerComp";

export default function NotFound() {
  return (
    <section className="grid mt-8 lg:mx-40 text-center">
      <HeaderPage text={"Страница не найдена"} />
      <p>Эта страница не существует. <em className="font-italic text-gray-500">Пока что.</em></p>
      <Link href="/" className="bg-primary text-white px-3 py-1 rounded-md mx-auto mt-5">Вернуться на главную</Link>
    </section>
  );
}
