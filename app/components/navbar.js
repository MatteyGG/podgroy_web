import React from "react";
import Link from "next/link";

function NavBar(){
  return (
    <div className=" content-center">
      <div className="header flex w-[90%] mx-8 justify-between mt-5">
        <Link href="/" className="lg:text-3xl md:block hidden">Подгорой</Link>
        <div className="menu">
          <nav>
            <ul className="flex gap-[25px] text-sm md:text-lg">
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
          </nav>
        </div>
      </div>
    </div>
  )
}
export default NavBar;