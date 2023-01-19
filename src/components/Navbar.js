import React,{useState} from 'react'
import {s} from './Text';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
let mssg='';
export default function Navbar(props) {
  const [searchval,searchSet]=useState('');
 const searchButton=(event)=>{
    searchSet(event.target.value);
    
    if(s.indexOf(searchval)>=0 && s.includes(searchval)){
      mssg="Found at" +s.indexOf(searchval) ;
    }
    else{
      mssg="Not found";
    }
 }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        <input className="form-control me-2" type="search" onChange={searchButton}  placeholder="Search" aria-label="Search"/>
        <p className="ansvalue"  >{mssg}</p>
        
      </form>
    </div>
  </div>

</nav>
  )
}
Navbar.prototype={title: PropTypes.string,
                    about: PropTypes.string};

Navbar.defaultProps={
    title: "TextAnalyser",
    about: "About"
}