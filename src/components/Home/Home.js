import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
    const [users, setUser] = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/create")

    }

    return (
        <div>
            <h1 className="header">List of Employees </h1>
            {/* <Link to="/create"> */}
            <Button className="create__btn " variant="primary" onClick={handleClick}>
                Create User
            </Button>



            {/* </Link> */}

            <Table striped bordered>
                <thead>
                    <tr>
                        <th className="header">ID</th>
                        <th className="header">Name</th>
                        <th className="header">Position</th>
                        <th>Salary</th>
                        <th className="header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.salary}</td>
                            <td>
                                <Link to={"/read/" + user.id}>
                                    <Button className="action__btn" variant="success">
                                        Read
                                    </Button>
                                </Link>
                                <Link to={"/edit/" + user.id}>
                                    <Button className="action__btn" variant="info">
                                        Edit
                                    </Button>
                                </Link>
                                <Link to={"/delete/" + user.id}>
                                    <Button className="action__btn" variant="danger">
                                        Delete
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Home;