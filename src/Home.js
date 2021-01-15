import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">

            <img 
                src="https://images.unsplash.com/photo-1605634591626-d22e59984842?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
                alt="vending machine"
                width="400px"
                />

        <div className="Home-links">
            <Link to="/Chips">Chips</Link><br/><br/><br/><br/>
            <Link to="/Soda">Soda</Link><br/><br/><br/><br/>
            <Link to="/Chocolate">Chocolate</Link>
        </div>


        </div>
    );
};

export default Home;