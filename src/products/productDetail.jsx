import { motion } from "framer-motion";

motion;
export default function ProductDetail({ product }) {
  return (
    <>
      <div className="flex gap-4">
        <motion.div
          className="flex align-center w-1/2"
          animate={{
            rotate: 360, // Xoay 360 độ
            scale: [1, 1.5, 1], // Phóng to rồi thu nhỏ
          }}
          transition={{
            duration: 2, // Thời gian hoàn thành
            ease: "easeInOut", // Hiệu ứng mượt
          }}
        >
          <img className="w-full h-[200px]" src={product.image} alt="123" />
        </motion.div>
        <div className="w-1/2">
          <div className="space-y-8">
            <div className="flex items-center text-left">
              <p className="w-1/2 font-semibold">Name</p>
              <p className="w-1/2 ">{product.name}</p>
            </div>
            <div className="flex items-center text-left">
              <p className="w-1/2 font-semibold">Alias</p>
              <p className="w-1/2 ">{product.alias}</p>
            </div>
            <div className="flex items-center text-left ">
              <p className="w-1/2 font-semibold">Description</p>
              <p className="w-1/2 ">{product.description}</p>
            </div>
            <div className=" flex items-center text-left ">
              <p className="w-1/2 font-semibold">Short Description</p>
              <p className="w-1/2">{product.shortDescription}</p>
            </div>
            <div className=" flex items-center text-left">
              <p className="w-1/2 font-semibold">Price</p>
              <p className="w-1/2 ">{product.price}</p>
            </div>

            <div className=" flex items-center text-left">
              <p className="w-1/2 font-semibold">Quantity</p>
              <p className="w-1/2 ">{product.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
