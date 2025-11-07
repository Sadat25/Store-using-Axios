import React from 'react'
import { useNavigate } from 'react-router';

const Card = ({ title, description, image, id }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };


    return (
        <div onClick={handleClick} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="cursor-pointer m-auto " src={image} alt />
            <div className="p-5">
                <h5 className="cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="cursor-pointer mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <button className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default Card