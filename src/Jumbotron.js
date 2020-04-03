import React from "react";

// Jumbotron indicates a big box for calling extra attention to some special content or
function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">{props.childern}
                <p className="lead">Only click image once to get highscore. Good luck kawan!</p>
            </div>
        </div>
    )
}

export default Jumbotron;