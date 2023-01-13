import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="/images/post_temp.png" alt="no_photo"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">cat 1 cat 2</span>
                </div>
                <Link to={`/post/randomNum`} className="link">
                <span className="postTitle">title</span>
                </Link>
                <hr />
                <span className="postDate">
                    today
                </span>
            </div>
            <p className="postSummary">To my dear Historia: As Im writing this, Reiner stands next to me. Its pretty obvious that hes sneaking peeks at this love letter. He can be such a creep. No wonder hes single. However, he did promise me hed deliver this letter to you. He says its payback for saving them that one time. Im sorry about then. I never imagined I would end up choosing them over you. It wont be long till I die. But I have no regrets. Thats what Id like to say, but there is one thing: Its that I wasnt able to marry you. Sincerely, Ymir.</p>
        </div>
    )
}