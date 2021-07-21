import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            
            <div class="wrapper">
                <div className="left">
                    <a href="#intro" className= "logo">kerkpy.</a>
                    <div className="itemContainer">
                        <Person/>
                        <span>+65 9729 2541</span>

                        
                    </div>
                    <div className="itemContainer">
                        <Mail/>
                        <span>peiyongkerk@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
