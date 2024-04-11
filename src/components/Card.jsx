import React from "react";

export default function Card() {
  return (
    <div
      className="w-full rounded-lg shadow
   bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-600"
    >
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://img.freepik.com/free-photo/bananas-white-background_1187-1671.jpg?t=st=1712843390~exp=1712846990~hmac=13dbff15f69ef2594b947484ba64ff0b4481e64670e50e69b5c7cb3fe527aff8&w=740"
          alt="image1"
        />
      </a>
      <div className="px-5 py-5">
        <a href="/">
          <h4 className="text-xl font-serif text-gray-800 dark:text-white">
            Banana
          </h4>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray dark:text-white">
            $100
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5
             text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
