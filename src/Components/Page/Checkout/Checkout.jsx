import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const Checkout = () => {
  const { name, icon, author, price, invoice } = useLoaderData();
  return (
    <div>
      <div className="container mx-auto mt-32 mb-16">
        <div className="bg-white relative shadow rounded-lg pb-2 w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
          <div className="flex justify-center">
            <img
              src={icon}
              alt=""
              className="object-contain rounded-md p-2 mx-auto absolute -top-20 w-32 h-32 shadow-lg border-2 border-gray-100 bg-secondary transition duration-1000 transform hover:scale-110"
            />
          </div>

          <div className="mt-16">
            <div className="text-gray-600 text-sm text-center">
              Invoice id: #{invoice}
            </div>

            <h2 className="font-bold text-center text-3xl">{name}</h2>
            <h1 className="text-center font-bold text-5xl pt-2 text-neutral">
              ${price}
            </h1>
            <div className="text-center pt-3">
              <small className="text-gray-600 text-xs text-center">
                Instructor
              </small>
            </div>
            <p className="text-center text-sm font-medium">{author.name}</p>
            <div className="my-5 px-6 flex justify-center">
              <label
                htmlFor="my-modal-3"
                to=""
                className="cursor-pointer modal-button w-full font-semibold bg-neutral hover:bg-primary text-secondary py-3 transition duration-200 rounded shadow-md inline-flex items-center justify-center"
              >
                <AiOutlineShoppingCart className="mr-2 font-semibold"></AiOutlineShoppingCart>
                Proceed To Checkout
              </label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box bg-zinc-100 flex justify-center items-center h-28 relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle bg-neutral text-secondary absolute right-2 top-2"
                  >
                    ???
                  </label>
                  <h3 className="text-2xl text-green-700 font-medium flex justify-center items-center">
                    <MdDone className="font-black text-secondary mr-2 mt-1 bg-green-700 rounded-full"></MdDone>{" "}
                    Purchase Successful
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
