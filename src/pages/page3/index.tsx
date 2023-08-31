import React from 'react';

import {useParams,useSearchParams} from 'react-router-dom';

const Page2=(props:any)=>{
    const {page3} = useParams();
    const [searchParams]=useSearchParams();
    console.log("searchParams ",searchParams.get('sort'))

    return (
        <h1 className="text-3xl font-bold underline">
        Hello world Page3 {page3}
      </h1>
      );
}

export default Page2