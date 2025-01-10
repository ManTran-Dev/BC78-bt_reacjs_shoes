export default function Product({ product, footer, onClickModal }) {
  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={product.image} alt="123" />
        </a>
        <div className="p-2">
          <a href="#">
            <h5 className="line-clamp-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {product.price}
          </p>
          <button
            onClick={() => onClickModal(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}
