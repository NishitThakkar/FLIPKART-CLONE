import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar2() {

    const mystyle = {
        display: "flex",
        justifyContent: "space-evenly",
        fontSize: "20px",
        borderBottom: "2px solid rgba(40,116,240)",
        marginTop: "5px"
    };


    return (
        <div>
            <div className="nav2" >
                <div className="" style={mystyle}>
                    <NavLink activeClassName="active" exact to="/Product_mobile">
                        <p>MOBILE</p>
                    </NavLink>

                    <NavLink activeClassName="active" exact to="/Product_tv">
                        <p>TV</p>
                    </NavLink>

                    <NavLink activeClassName="active" exact to="/Product_laptop">
                        <p>LAPTOP</p>
                    </NavLink>

                    <NavLink activeClassName="active" exact to="/Product_ac">
                        <p>AC</p>
                    </NavLink>

                    <NavLink activeClassName="active" exact to="/Product_Washing_machine">
                        <p>WASHING MACHINE</p>
                    </NavLink>


                </div>
            </div>
        </div>
    )
}

export default Navbar2
