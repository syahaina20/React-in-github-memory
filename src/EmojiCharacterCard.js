import React from "react";

function EmojiCharacterCard(props) {
    return (
        <div className={"card " + (props.ClickEd ? "animate" : "")} onClick={() => props.handleClick( props.id)}>  
            <div className="img-container">
                <img alt={props.type} src={props.image} />
            </div>

            <div className="img-content">
                <ul>
                    <li>
                        <strong>type:</strong>{props.type}
                    </li>

                    <li>
                        <strong>sign: </strong>{props.sign}
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default EmojiCharacterCard;