import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>

            <h1>Hello, Noob!!!</h1>
            <p>
                This URL is not Valid
            </p>
            <p>
                <Link to="/"><Button variant="primary">Back to HOME Page</Button> </Link>
            </p>

        </div>
    );
};

export default NotFound;