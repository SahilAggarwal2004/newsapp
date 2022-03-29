import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Context from '../context/Context';

export default function Navbar() {
    const countries = ["au_Australia", "ca_Canada", "in_India", "ie_Ireland", "my_Malaysia", "ng_Nigeria", "nz_New Zealand", "ph_Philippines", "sa_Saudi Arabia", "sg_Singapore", "za_South Africa", "gb_United Kingdom", "us_United States"]
    const { categories, setCountry, setQuery } = useContext(Context)
    const [width, setWidth] = useState(window.outerWidth)
    // const [height, setHeight] = useState(window.outerHeight)
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.outerWidth)
            // setHeight(window.outerHeight)
        });
        // eslint-disable-next-line
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsDose</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav pe-3 me-auto mb-2 mb-lg-0">
                        {categories.map((element) => {
                            return (
                                <li className="nav-item" key={element}>
                                    <Link className="nav-link" aria-current="page" to={`/${element.toLowerCase()}`}>
                                        <button className='btn shadow-none nav-link p-0' data-bs-toggle='collapse' data-bs-target={width > 991 ? '' : "#navbarSupportedContent"}>
                                            {element ? element : "Home"}
                                        </button>
                                    </Link>
                                </li>)
                        })}
                    </ul>
                    <div className='d-flex'>
                        <select className="form-select w-auto me-2" aria-label="Choose country" defaultValue={localStorage.getItem('country') || "in"} onChange={() => {
                            setCountry(document.querySelector("select").value);
                            localStorage.setItem('country', document.querySelector("select").value)
                        }}>
                            {countries.map(element => {
                                return (
                                    <option value={element.split('_')[0]} key={element.split('_')[0]}>{element.split('_')[1]}</option>
                                )
                            })}
                        </select>
                        <input className="form-control ps-1" type="search" placeholder="Search" aria-label="Search" onChange={event => {
                            setQuery(event.target.value)
                        }} />
                    </div>
                </div>
            </div>
        </nav >
    )
}
