import React,{memo} from 'react';

const ChatMessage=({name, message })=>{
    console.log(`Rendering ChatMessage: ${name} - ${message}`);
    const getRandomNo = () => {
        return Math.floor(Math.random() * 256)
    }
    const getRandomColor = () => {
        const randomColor = `rgba(${getRandomNo()}, ${getRandomNo()}, ${getRandomNo()}, 0.7)`;
        return randomColor;
    };

    const profileIconStyle = {
        backgroundColor: getRandomColor(),
    };
    return (
        <div className='flex flex-row items-center gap-3 justify-start'>
             <div className="h-[30px] w-[30px] text-[10px] flex shrink-0 justify-center items-center font-bold rounded-full" style={profileIconStyle} title={name}>{name.charAt(0)}</div>
            <div>{message}</div>
        </div>
    )
};

export default memo(ChatMessage);