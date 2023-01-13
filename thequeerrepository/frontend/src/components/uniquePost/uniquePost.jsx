import React from "react"
import "./uniquePost.css"
import { Link } from "react-router-dom";

export default function UniquePost() {
    return (
        <>
            <div className="uniquePost">
                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                        Hello
                            <div className="editPost">
                                <i className="postIcon far fa-edit"> </i>
                                <i className="postIcon far fa-trash-alt"> </i>

                            </div>
                    </h1>
                    <img src="/images/queer_rep_logo_1.png" alt="post image" className="uniquePostImage"/>
                <div class Name="uniquePostInfo">
                    <span className="uniquePostAuthor">
                        Author: <Link to ={`/?user=hahns`} className="link">
                            <b> Hahns102</b>
                        </Link>
                    </span>
                    <span className="uniquePostDate"> 
                        today 
                    </span>
                </div>
                <p className="uniquePostDescription">Cause karma is my boyfriend. Karma is a god. Karma is the breeze in my hair on the weekend. Karma's a relaxing thought. Aren't you envious that for you it's not?</p>
                </div>
            </div>
        </>
    )
}