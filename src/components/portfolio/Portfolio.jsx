import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import Codefiesta from "./List/Codefiesta";
import Personalwebsite from "./List/Personalwebsite";
import Scheduler from "./List/Scheduler";
import Chatbot from "./List/Chatbot";

import {useState } from "react";


export default function Portfolio() {

    const [selected, setSelected] = useState("codefiesta");

    const list = [
        {
            id: "codefiesta",
            title: "CodeFiesta",
        }, 
        
        {
            id: "scheduler",
            title: "Scheduler",
        }, 
        {
            id: "chatbot",
            title: "Chat Bot",
        }, 
        {
            id: "personalwebsite",
            title: "Personal Website",
        },

    ]

    return (
        <div className="portfolio" id = "portfolio">
            <h1> Portfolio </h1>

            <span><i>"I have never seen somebody so smart yet so dumb before"</i> - Goh Yu Heng, friend of KerkPY, probably</span>

            <ul>
                {list.map((item) =>(
                    <PortfolioList 
                        title ={item.title} 
                        active = {selected === item.id} 
                        setSelected = {setSelected}
                        id = {item.id}
                        />
                    
                ))}
             
            
            </ul>

            <div className="container">
                {selected === "codefiesta" && <Codefiesta/>}

                {selected ==="personalwebsite" && <Personalwebsite/>}

                {selected ==="scheduler" && <Scheduler/>}

                {selected ==="chatbot" && <Chatbot/>}
                
            </div>

        </div>
    )
}
