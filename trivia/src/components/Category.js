import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Questions }  from './Questions'

export const Category = ({id}) => {
const [questions, setQuestions] = useState([])
const [selectedQuestion, setSelectedQuestion] = useState([])
useEffect(() => {

    axios.get(`https://opentdb.com/api.php?amount=10&category=${id}`)
    .then((response) => {
        setQuestions(response.data.results)
        console.log(questions)
    });
}, [id]);
    console.log(questions)
    return (
        <div className="category">
            <Questions questions={questions} />
</div>
);
}