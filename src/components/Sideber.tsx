import { useEffect, useState } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sideber = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        setCategories([...new Set(data.products.map((p) => p.category))]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product"
        />

        <input
          type="text"
          className="border-2 mr-2 px-5 py-3 mb-3 w-full"
          placeholder="min"
        />
        <input
          type="text"
          className="border-2 mr-2 px-5 py-3 mb-3 w-full"
          placeholder="max"
        />

        {/* categories section */}

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>

        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                className="mr-2 w-4 h-4"
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/* keywords section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
        </div>

        <div>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="block mb-2 px-4 py-2 w-full text-center border rounded hover:bg-gray-200"
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>

        <button className="w-full mb-4 py-2 bg-black text-white rounded mt-5">
          {" "}
          Reset Filter{" "}
        </button>
      </section>
    </div>
  );
};

export default Sideber;
