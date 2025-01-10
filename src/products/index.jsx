import dataProduct from "./data";
import Product from "./product";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductDetail from "./productDetail";
import { div } from "framer-motion/client";

export default function index() {
  const [dataPhone, setdataPhone] = useState(dataProduct);
  const [dataDetail, setdataDetail] = useState(null);
  const handleClickDetail = (dataProduct) => {
    setdataDetail(dataProduct);
    console.log(dataProduct);
  };
  const closeDetails = () => {
    setdataDetail(null); // Đặt lại sản phẩm được chọn về null
  };
  console.log(dataPhone);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center mb-10">Shoes Store</h1>
        <div className="grid grid-cols-3 gap-4">
          {dataPhone.map((item) => (
            <Product
              key={item.id}
              product={item}
              // footer={
              //   <button
              //     onClick={handleClickDetail}
              //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              //   >
              //     View Detail
              //   </button>
              // }
              onClickModal={handleClickDetail}
            />
          ))}
          {!!dataDetail && (
            <div className="modal-overlay">
              <div className="center-fixed">
                <h2 className="text-3xl font-bold mt-8 mb-6 text-center border ">
                  Product Details
                </h2>
                <ProductDetail product={dataDetail} />
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2"
                  onClick={closeDetails}
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
