import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © Подгорой 2024[В разработке]
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Домой
            </a>
          </li>
          <li>
            <a href="/contacts" className="hover:underline">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
