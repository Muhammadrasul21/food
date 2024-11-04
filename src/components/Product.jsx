import React, { useEffect as func, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, count] = useState(6);

  func(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const twoword = (text) => {
    const words = text.split(" ");
    return words.length > 3 ? words.slice(0, 2).join(" ") + "..." : text;
  };

  const addcards = () => {
    count(visibleCount + 6);
  };

  return (
    <div className="container mx-auto max-w-[1140px] p-4">
      <div className="flex flex-col items-center mb-8">
        <p className="font-medium text-[#DC780B]">MENU</p>
        <h2 className="font-bold text-3xl">Food With A New Passion</h2>
        <p className="text-center w-[750px] mb-16">
          There are many things needed to start the Fast Food Business. You need
          not only food stalls with personnel but also specialized equipment and
          skills to manage customers.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img src={product.thumbnail} alt={product.title} />
            <div className="flex flex-col">
              <div className="flex justify-between items-center my-[20px]">
                <h3 className="font-bold text-[25px]">
                  {twoword(product.title)}
                </h3>
                <p className="font-bold text-[25px]">${product.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button className="w-9 h-[34px] rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out">
                  +
                </button>
                <div className="text-yellow-500">
                  {"★".repeat(Math.round(product.rating))}{" "}
                  <span className="text-gray-300">
                    {"★".repeat(5 - Math.round(product.rating))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={addcards}
            className="px-6 py-2 rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out"
          >
            Learn More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
