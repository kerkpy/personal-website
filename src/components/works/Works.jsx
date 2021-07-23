import "./works.scss"
import { useState } from "react"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way ==='left' ? setCurrentSlide(currentSlide > 0? currentSlide - 1: 4) : 
        setCurrentSlide(currentSlide < 4 ? currentSlide + 1: 0);
    }


    
    return (

        
        <div className="works" id ="works">
            

            
            <div className="slider" style = {{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <div className="container">
                    <div className="item">
                        <div className="left">
                                    <img src ="../assets/ocbc-og.PNG" alt="ocbc"/>
                        </div>

                        <div className="right">

                            <h1>OCBC Data Analytics Intern</h1>

                            <br/>

                            <p>Currently an intern at OCBC, attached to Group Legal Regulatory Compliance department and subsequently Group Technology Operations.</p>
                            
                            <br/>


                            <h2>Job Scope and Achievements</h2>

                            <br/>

                            <p>Identified manual and tedious processes in the workflow. Addressed these issues by helping to automate the data collection through the use of VBA.</p>
                            <br/>
                            <p>Program written strived to be as simple for the user as possible, and well-documented for ease of maintainability.</p>
                            <br/>
                            <p>Reduced the time taken for several processes, from a few hours to a few minutes.</p>



                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="item">
                        <div className="left">

                            
                                    <img src ="../assets/sw.png" alt="sw"/>

                                    
                                
                        
                        </div>

                        <div className="right">

                            <h1>Senior AI Operator</h1>

                            <br/>

                            <p>Previously worked at Saleswhale as an AI Operator from Nov 2018 to Aug 2019</p>
                            
                            <br/>


                            <h2>Job Scope and Achievements</h2>

                            <br/>

                            <p>As a senior AI Operator, I was in charge of ensuring the operations involving the AI in the company. This includes ensuring that the training data is clean.</p>
                            <br/>
                            <p>I was also responsible for ensuring the correctness of the other AI operators, and training them.</p>
                            <br/>
                            <p>Being in the "frontline", I provided feedback to engineering and marketing teams to improve on the product.</p>



                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="item">
                        <div className="left">

                            
                                    <img src ="../assets/hcanoe.PNG" alt="hc"/>

                                    
                        </div>

                        <div className="right">

                            <h1>Canoeing Coach</h1>

                            <br/>

                            <p>Coached a school team between 2018 and 2021</p>
                            
                            <br/>


                            <h2>Job Scope and Achievements</h2>

                            <br/>

                            <p>I was in charge of a group of approximately 30 students. I was responsible for their welfare and their training outcomes.</p>
                            <br/>
                            <p>During my stint as a coach, they had won a national championship. For the remaining years, the championships were cancelled in view of Covid. During this
                                period, I had conducted sessions online.
                            </p>
                            <br/>
                            <p>As a coach, one of the key responsibilities is in tracking the performance of the athletes.</p>
                            <br/> 
                            <p>To facilitate that, I had written scripts on Google Sheets that aids in compiling and tracking their performance.</p>



                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="item">
                        <div className="left">

                            
                                    <img src ="../assets/elite.jpg" alt="elite"/>

                                    
                                
                        
                        </div>

                        <div className="right">

                            <h1>English Tutor</h1>

                            <br/>

                            <p>I teach English to Primary School students between P5 and P6 on weekends</p>
                            
                            <br/>


                            <h2>Job Scope and Achievements</h2>

                            <br/>

                            <p>I conduct lessons for the students and attempt to make them as interesting as possible.</p>
                            <br/>
                            <p>To achieve that, I use different tools to aid in teaching, including Kahoot. I encourage the students to ask questions, and participate actively to pique their curiosity.</p>
                            



                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="item">
                        <div className="left">

                            
                                    <img src ="../assets/saf.png" alt="saf"/>

                                    
                                
                        
                        </div>

                        <div className="right">

                            <h1>Manpower Officer</h1>

                            <br/>

                            <p>In charge of the manpower for a battalion in SAF.</p>
                            
                            <br/>


                            <h2>Job Scope and Achievements</h2>

                            <br/>

                            <p>I was previously the deputy Manpower Officer during NS. I had helped to resolve the HR issues of the soldiers within the battalion. Examples include
                                Service Injury reports, Awards and Recognitions.
                            </p>

                            <br/> 
                            
                            
                            <p>Subsequently, I was appointed the Manpower Officer for the remaining duration of the NS cycle.</p>
                            



                            
                        </div>
                    </div>
                </div>
            </div>

            <img src="../../assets/arrow.png" className="arrow left" alt="" onClick= {() => handleClick("left")}/>
            <img src="../../assets/arrow.png" className="arrow right" alt="" onClick = {() => handleClick("right")}/>
            


        </div>
    )
}
