import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitle2"> The Queer   </span>
                <span className="headerTitle1"> Repository </span>
                <img className="headerImg" src="/images/background.png" alt="header" />
            </div>
        </div>
    )
}