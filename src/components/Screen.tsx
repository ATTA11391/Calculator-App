import React from 'react';
interface ScreenProps{
    output: string
    history:string[]
}

const Screen: React.FC<ScreenProps> = (props) => {
    const {output}=props;
    const {history}=props;
return(
<>
<div className='text-white flex text-right w-[95%]'>
{history.map((ele) =>
<p>{ele}, </p>
)}
</div>
<div className='bg-black text-white text-right w-[500px] text-2xl'>
{output}
</div>

</>

)
};
export default Screen


