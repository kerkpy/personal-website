import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            disableBackTyping:true,
            typeSpeed: 50,
            strings: ["A NUS CS Student Passionate about Tech."],
        });

    }, []);

        
    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src = "assets/me.jfif" alt= "Me!"></img>
                </div>
            </div>



            <div className="right">
                <div className = "wrapper">
                    <h2>Hi There! I am</h2>
                    <h1>Kerk Pei Yong</h1>
                    <h3><span ref={textRef}></span></h3>

                    <a href="#portfolio">
                    <ExpandMoreIcon/>
                
                    </a>
                </div>

                
            </div>
        </div>
    )
}
