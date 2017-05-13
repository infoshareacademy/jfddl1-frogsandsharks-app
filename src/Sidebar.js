
import React from 'react'
import { nameOfAnimation as MenuRoot } from 'react-burger-menu'

const Sidebar = () => (
            <MenuRoot>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </MenuRoot>
)


export default Sidebar