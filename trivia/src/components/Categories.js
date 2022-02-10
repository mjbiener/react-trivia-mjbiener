import React, { useState } from 'react';
// import axios from 'axios';
import { Category } from './Category';



export const Categories = ({ categories }) => {
    const [category, setCategory] = useState ([])
    console.log(category)
    return (
        <>
            <div className="categories">
                <h4>Select a Category:</h4>
                {categories.map((category) => (
                    <button onClick={() => (setCategory(category))}  className="btn btn-dark" key={category.id}>{category.name}</button>
                ))}
            </div>
            <Category category={category}/>
        </>
    )
}