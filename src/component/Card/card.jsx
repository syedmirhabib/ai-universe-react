import React, { useEffect } from 'react';

const card = () => {
    const [data, setData] = useState([]);

    
    useEffect(()=> {
        const loadData = async() => {
            const res = await fetch(
                `https://openapi.programming-hero.com/api/ai/tools`
                );
            const data = await res.json();
            console.log(data.data.tools)
        };

        loadData();
    },[]);


    return (
        <>
          data.map((singleData) => {
            console.log(singleData)
            return <SingleData/>

          })  
        </>
    );
};

export default card;