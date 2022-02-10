import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Questions }  from './Questions'
import he from 'he';

export const Category = ({category}) => {
    const [questions, setQuestions] = useState([])
    console.log(category)

    useEffect(() => {
        
            axios.get(
                `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
            )
            .then((response) => {
                setQuestions(response.data.results
                    .map((question, index) => {
                    const answer = he.decode(question.correct_answer)
                    const options = [...question.incorrect_answers.map( item => he.decode(item)), answer]
                    return {
                        id: `${index}`, 
                        question: he.decode(question.question),
                        answer: answer,
                        options: options.sort(() => Math.random() - 0.5)
                    }
                }))

                // setQuestions(response.data.results)
                console.log(questions)

            })
        },[category])




    return (
        <>
        <div className="category">
            {category.name}
            
        </div>
        <Questions questions={questions}/>
        </>
        
);
}