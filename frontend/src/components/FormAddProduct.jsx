import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [harga_beli, setharga_beli] = useState("");
  const [harga_jual, setharga_jual] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        harga_beli: harga_beli,
        harga_jual: harga_jual
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    // <div>
    //   <h1 className="title">Products</h1>
    //   <h2 className="subtitle">Add New Product</h2>
    //   <div className="card is-shadowless">
    //     <div className="card-content">
    //       <div className="content">
    //         <form onSubmit={saveProduct}>
    //           <p className="has-text-centered">{msg}</p>
    //           <div className="field">
    //             <label className="label">Name</label>
    //             <div className="control">
    //               <input
    //                 type="text"
    //                 className="input"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 placeholder="Product Name"
    //               />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label">Harga Beli</label>
    //             <div className="control">
    //               <input
    //                 type="text"
    //                 className="input"
    //                 value={harga_beli}
    //                 onChange={(e) => setharga_beli(e.target.value)}
    //                 placeholder="Price"
    //               />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label">Harga Jual</label>
    //             <div className="control">
    //               <input
    //                 type="text"
    //                 className="input"
    //                 value={harga_jual}
    //                 onChange={(e) => setharga_jual(e.target.value)}
    //                 placeholder="Price"
    //               />
    //             </div>
    //           </div>

    //           <div className="field">
    //             <div className="control">
    //               <button type="submit" className="button is-success">
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" w-full min-h-screen mx-auto flex justify-center items-center bg-dark2 px-60">
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto w-full">
          <div className="py-3 pl-2 w-full h-full">
            <div className="relative max-w-xs w-full">
              <form onSubmit={saveProduct}>
                <p className="flex justify-center items-center text-white">
                  {msg}
                </p>
                <div className="font-medium">
                  <label className="text-lg flex justify-center items-center uppercase text-white">
                    Nama Barang
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      className="w-full h-auto rounded-lg p-2 text-white mt-2"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Masukan Nama Barang"
                    />
                  </div>
                </div>
                <div className="font-medium mt-8">
                  <label className="text-lg flex justify-center items-center uppercase text-white">
                    Harga Beli
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      className="w-full h-auto rounded-lg p-2 text-white mt-2"
                      value={harga_beli}
                      onChange={e => setharga_beli(e.target.value)}
                      placeholder="Masukan Harga Beli"
                    />
                  </div>
                </div>
                <div className="font-medium mt-8">
                  <label className="text-lg flex justify-center items-center uppercase text-white">
                    Harga Jual
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      className="w-full h-auto rounded-lg p-2 text-white mt-2"
                      value={harga_jual}
                      onChange={e => setharga_jual(e.target.value)}
                      placeholder="Masukan Harga Jual"
                    />
                  </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="p-2 mt-4 w-full font-medium bg-dark1 text-white h-auto rounded-lg">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
