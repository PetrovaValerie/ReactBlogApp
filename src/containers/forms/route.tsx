import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";


const headers = {
    'Content-Type': 'application/json;charset=utf-8',
}

export const ActivationRoute = () => {

    const {uid, token } = useParams();
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
            method: 'POST',
            body: JSON.stringify({uid, token}),
            headers
        }).then(response => {
            console.log('response', response)
            response.json()
        })
            .then(data => console.log(data));
    }, [])


    return (
        <div style={{textAlign:'center', fontSize:'24px'}}>uid: {uid} token: {token}</div>
    )
}

// activate/NTQ3Ng/bf1p3s-203249d502b91651731eac704a0fc723