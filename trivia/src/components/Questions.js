import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Category }  from './Category'

export const Questions = ({questions}) => {




    return (
        <div>
        {questions.map((question) => (
            <button
            key={question.id}>{question.question} 
            </button>
        ))}
        </div>
    )
}