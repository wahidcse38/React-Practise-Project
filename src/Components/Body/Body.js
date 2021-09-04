import React, { Component } from 'react'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Redirect } from 'react-router-dom';

function Body() {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
        </div>
    )
}
export default Body
