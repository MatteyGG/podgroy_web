import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

import SignoutButton from "./signoutButton";

async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-4">
          <Link href="/" className="lg:text-3xl">
            <span className="self-center text-3xl font-semibold whitespace-nowrap ">
              Подгорой
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="tel:+79099755597"
              className="text-sm  text-gray-500  hover:underline md:block hidden"
            >
              +7 (909) 997-55-97
            </Link>
            {session?.user ? (
              <>
                <Link href="/profile">Профиль</Link>
                <SignoutButton />
              </>
            ) : (
              <>
                <div className="flex gap-1">
                  <div>
                    <Link
                      href="/registration"
                      className="text-primary_dark px-3 py-1 rounded-md"
                    >
                      Регистрация
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/login"
                      className="bg-primary text-white px-3 py-1 rounded-md"
                    >
                      Войти
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav>
        <div className="max-w-screen-xl py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium text-sm lg:text-xl mt-0 space-x-8">
              <li>
                <Link href="/">Домой</Link>
              </li>
              <li>
                <Link href="/news">Новости</Link>
              </li>
              <li>
                <Link href="/booking">Бронирование</Link>
              </li>
              <li>
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
