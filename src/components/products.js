import React, { useState } from 'react';

import Product from './product';

const Products = (props) => {
    const [products] = useState([
        {
            id: 1,
            image: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
            title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            author: 'Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller',
            price: 59.99
        },
        {
            id: 2,
            image: 'https://img-c.udemycdn.com/course/480x270/705264_caa9_11.jpg',
            title: 'Modern React with Redux',
            author: 'Stephen Grider',
            price: 59.99
        },
        {
            id: 3,
            image: 'https://img-c.udemycdn.com/course/480x270/3749464_eaea.jpg',
            title: 'React and Typescript: Build a Portfolio Project',
            author: 'Stephen Grider',
            price: 59.99
        },
        {
            id: 4,
            image: 'https://img-c.udemycdn.com/course/480x270/3604434_7884_3.jpg',
            title: "Microfrontends with React: A Complete Developer's Guide",
            author: 'Stephen Grider',
            price: 59.99
        }
    ])
    return (
       <main className='main col-2'>
            <h2>React Courses</h2>
            <div className='row'>
                {products.map((item, id) =>(
                    <Product item={item} key={id} onAdd={props.onAdd}/>
                ))}
            </div>
       </main>
    )
}
export default Products;