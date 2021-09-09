import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Category }  from './Category'


export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {
        axios.get(`https://opentdb.com/api_category.php`).then((response) => {
            setCategories(response.data.trivia_categories)
        });
    }, []);
    return (
        <div className="categories">
                {categories.map((category) => (
                    <button onClick={() => (setSelectedCategory (category.id))} 
                    key={category.id}>{category.name} 
                    </button>
                ))}
            <div>
            <Category id={selectedCategory} /> 
            </div>    
        </div>
    );
};