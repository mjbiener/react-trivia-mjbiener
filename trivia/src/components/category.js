import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Category = ({id}) => {

useEffect(() => {
    console.log('it runs')
    axios.get(`https://opentdb.com/api.php?amount=10&category=${id}`).then((response) => {
        console.log(response)
    });
}, [id]);
    return <p>hello {id}</p>
}