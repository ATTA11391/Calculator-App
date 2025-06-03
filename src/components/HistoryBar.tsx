import * as React from 'react';
import { useState } from 'react';

interface HistoryBarProps {
    allResults: string[]
}



const HistoryBar: React.FC<HistoryBarProps> = (props) =>{
    const {allResults} = props

    return(
        <>
        
            
        <div className='flex flex-col ml-[90%] items-end mt-10 w-[5%] text-white'>
            {allResults.map((result : string) => (
                <div className=''>
                    <p> {result}</p>
                </div>
            ))}
        </div>
       
        </>
    )
}
export default HistoryBar

