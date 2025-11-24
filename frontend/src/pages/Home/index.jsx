import Categories from '../../components/Categories'
import Card from '../../components/Card'
import './Home.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../services/productService'

export default function Page() {
    const [selectBtn, setSelectedBtn] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();

            setProducts(data.slice(0, 8));
        }

        loadProducts();
    }, []);
    return (
        <div>
           <Categories selectedBtn={selectBtn} onSelect={setSelectedBtn}/>
           <div className='cards-container'>
            {products.map((item) => (
                <Card
                name= {item.title}
                image={item.image}
                category={item.category}
                description={item.description}
                price={item.price}
                />
            ))}
           </div>
           
           
        </div>
    )
}