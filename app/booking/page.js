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
        <section className="mt-8 lg:mx-40">
          <div className="text-primary_dark text-2xl grid-cols-1 md:text-4xl grid md:flex justify-center">
          <button>
            <Link
              href="/login"
              className="bg-primary text-white text-center px-3 py-1 rounded-md"
            >
              Войдите
            </Link>
            </button>
            <p className="text-xl text-center text-gray-500 md:text-4xl"> или </p>
            <button><Link
              href="/registration"
              className="bg-primary text-white text-center px-3 py-1 rounded-md"
            >
              зарегестрируйтесь
            </Link>
            </button>
          </div>
            <p className="flex text-xl md:text-4xl justify-center">для доступа к бронированию</p>
        </section>
      )}
    </>
  );
}
