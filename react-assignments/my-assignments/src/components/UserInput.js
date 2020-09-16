import React from 'react'

const userInput = (props) => {
    const styles = {
        border: '1px solid grey',
        padding: '30px'
    }
    return (
        <div className="input">
            <input type="text" value={props.name} style={styles} onChange={props.onChange}/>
        </div>
    )
}

export default userInput;