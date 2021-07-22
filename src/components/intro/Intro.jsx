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
                    <h3><a rel="noreferrer" target="_blank" href = "https://drive.google.com/file/d/1jvz0iaf8x-c2awbRVdhzkfthwYLtSF7A/view?usp=sharing">Link to Resume</a></h3>

                    <div className="shortintro">
                        <p>I am currently a 2nd Year student studying Computer Science and Business Administration (Double Degree) at NUS.
                        I am expected to graduate in December 2023. </p>

                        <br/>
                        
                        <p>I believe that technology can make a positive difference to the world. As such, I aspire to be the best programmer that I can be and hope to be of service to 
                        others. I seek every opportunity to improve myself.</p> 
                        
                        <br/>

                        <p>In my free time, I enjoy exercising (in particular, canoeing). A fun fact would be that I had previously coached a school team for the sport.</p>
                        
                        <br/>

                        <p>Through the website, I hope that you will get to know me better. </p>

                    </div>


                    <a className = "expand" href="#portfolio">
                    <ExpandMoreIcon/>
                
                    </a>
                </div>

                
            </div>
        </div>
    )
}
