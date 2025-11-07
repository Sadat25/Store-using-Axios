import axios from 'axios';
import { useEffect, useState } from 'react';
import Skeleton from './Components/Skeleton';
import Card from './Components/Card';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            try {
                const products = await axios.get('https://dummyjson.com/products');
                setItems(products.data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        getUser();
    }, []);

    if (loading) {
        return (
            <div className='container m-auto mt-[925px] flex flex-wrap gap-4 justify-center '>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        );
    }

    return (
        <div className='container m-auto'>
            <h1 className='py-10 text-center text-4xl italic font-semibold'>{"Product List -->"}</h1>
            <div className='flex flex-wrap gap-4 justify-center'>
                {items.map(item => (
                    <Card key={item.id} title={item.title} description={item.description} image={item.thumbnail} id={item.id}></Card>
                ))}
            </div>
        </div>
    );
};

export default Home;
