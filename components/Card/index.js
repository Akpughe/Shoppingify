import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
const Card = ({fruitName}) => {
    return (
        <div className="flex justify-between items-center bg-white rounded-xl w-48 h-12 px-4 shadow-md mr-4 ">
            <div>
                <span>{fruitName}</span>
            </div>
            <div>
                <AiOutlinePlus size={20}/>
            </div>
        </div>
    )
}

export default Card
