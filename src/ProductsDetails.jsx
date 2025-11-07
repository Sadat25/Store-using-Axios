import axios from 'axios';
import { useEffect, useState } from 'react';
import Skeleton from './Components/Skeleton';
import { useNavigate, useParams } from 'react-router';

const ProductsDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            try {
                const products = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(products.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        getUser();
    }, [id]);

    if (loading) {
        return (
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 '>
                <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        <div className="rounded-lg overflow-hidden">
                            <svg className="w-[560px] h-[560px] text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4" />
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
                            <div className="h-15 bg-gray-200 rounded-2xl dark:bg-gray-700 max-w-50 mb-7" />
                            <div className="h-15 bg-gray-200 rounded-2xl dark:bg-gray-700 max-w-full" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={() => navigate("/")}
                className="cursor-pointer mb-6 text-slate-900 font-medium hover:text-emerald-500 transition duration-300"
            >
                ← Back to Shop
            </button>

            <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="bg-slate-700 rounded-lg overflow-hidden">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            {product.title}
                        </h1>
                        <p className="text-gray-300 text-lg mb-6">{product.description}</p>
                        <div className="text-5xl font-bold text-emerald-400 mb-8">
                            ${product.price}
                        </div>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 w-full md:w-auto cursor-pointer ">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
