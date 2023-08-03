import { React, useState, useEffect } from 'react'
import axios from 'axios';


const FirstAttemp = () => {



    const [data, setData] = useState(null);

    var config = {
        method: 'get',
        url: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json',

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(config);
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div><div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div></div>
    )
}

export default FirstAttemp