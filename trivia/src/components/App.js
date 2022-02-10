import  { Categories } from './Categories'
// import Quiz from './components/Quiz'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  const [categories, setCategories] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    axios
        .get(
            `https://opentdb.com/api_category.php`
        )
        .then((response)  => {
            setCategories(response.data.trivia_categories)
            console.log(categories)
        })
}, [])

  return (
    <main>
      <h1>Trivia Quiz</h1>
      {/* {selectedCategory ? (
        <Quiz
          category={selectedCategory}
          handleGoBack={() => setSelectedCategory(null)}
        />
      ) : ( */}
        <Categories
          categories={categories}
          // setSelectedCategory={setSelectedCategory}
        />
      {/* )} */}
    </main>
  )
}

