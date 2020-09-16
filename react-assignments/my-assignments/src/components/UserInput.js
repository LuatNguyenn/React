import React from 'react'

const userInput = (props) => {
    return (
        <div className="input">
            <input type="text" value={props.name}/>
        </div>
    )
}

export default userInput;