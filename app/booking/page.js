import Form from "../components/form.js";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import HeaderPage from "../components/headerComp.js";
import Link from "next/link.js";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session?.user ? (
        <div className="grid mt-5 justify-center">
          <HeaderPage text="Бронирование" />
          <Form />
        </div>
      ) : (
        <section className="mt-8 lg:mx-40 content-center">
          <h1 className="text-center text-primary_dark text-2xl md:text-4xl">
            <Link
              href="/login"
              className="bg-primary text-white px-3 py-1 rounded-md"
            >
              Войдите
            </Link>
            или
            <Link
              href="/registration"
              className="bg-primary text-white px-3 py-1 rounded-md"
            >
              зарегестрируйтесь
            </Link>
            , чтобы получить доступ к бронированию
          </h1>
        </section>
      )}
    </>
  );
}
