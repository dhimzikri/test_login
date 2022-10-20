import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { isError, user } = useSelector(state => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async productId => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  if (user && user.role !== "admin") {
    // for User page
    return (
      <div className=" w-full h-fullcontainer mx-auto mt-14 px-60 bg-dark2">
      <div className="flex flex-col ">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2 w-full h-full">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Harga Beli
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Harga Jual
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {products.map((product, index) =>
                    <tr key={product.uuid}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                        {product.harga_beli}
                      </td>
                      <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                        {product.harga_jual}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
  } else {
    // admin page
    return (
      <div className=" w-full h-fullcontainer mx-auto mt-14 px-60 bg-dark2 text-white">
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <div className="py-3 pl-2 w-full h-full ">
              <div className="relative max-w-xs ">
                <label htmlFor="hs-table-search" className="sr-only text-white">
                  Search
                </label>
                <input
                  type="text"
                  name="hs-table-search"
                  id="hs-table-search"
                  className="text-black block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-1 pl-2">
              <Link to="/products/add">
                <button className="p-2 font-medium bg-dark1 text-white w-48 h-auto rounded-lg">
                  Tambah Barang
                </button>
              </Link>
            </div>
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-900 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Harga Beli
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Harga Jual
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product, index) =>
                      <tr key={product.uuid}>
                        <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                          {product.harga_beli}
                        </td>
                        <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                          {product.harga_jual}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <Link to={`/products/edit/${product.uuid}`}>
                            <a
                              className="text-green-500 hover:text-green-700"
                              href="#"
                            >
                              Edit
                            </a>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                            onClick={() => deleteProduct(product.uuid)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductList;
