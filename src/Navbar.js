import React from "react";

function Navbar(props) {
    return (
        <header className="container-fluid fixed-top" >
            <div className="row">
                <center>
                    <h1 className="col-sm-8">Simple Hand Emoji Memory Game</h1>
                </center>

                <br />
                <br />
                
                <nav className="col-sm-4">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Highest Score: <span>{props.highscore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;