import React from 'react'

const UserInput = ({input_type, input_placeholder, class_style}) => {
    return (
        <input type={input_type} placeholder={input_placeholder} className={class_style} />
    )
}

export default UserInput
