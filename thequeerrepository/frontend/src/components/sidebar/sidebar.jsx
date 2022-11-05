import "./sidebar.css"

export default function SideBar() {
    return (
        < div className="sideBar" >
            <div className="sideBarItems">
                <div className="sideBarItem">
                    <span className="sideBarTitle"> About The Queer Repository </span>
                    <img src="/images/queer_rep_logo_1.png" alt="logo" />
                    <p className="sideBarAbout">
                        In a world where media is overran by heteronormativity, it can be difficult for the LGBTQIA+ community to identify and relate to the media they consume. The Queer Repository serves as a hub for queer individuals to posts and share queer representation in media and voice their opinion about it.
                    </p>
                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle"> Categories </span>
                    <ul className="sideBarList">
                        <li className = "sideBarListItem">
                            cat 1
                        </li>
                        <li className = "sideBarListItem">
                            cat 2
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}