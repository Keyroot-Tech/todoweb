import React from "react";
import "./styles/main.css";
import ProfileIcon from "./assets/icons/profileIcon.svg"
import VoiceIcon from "./assets/icons/VoiceIcon.svg"
import WeekIcon from "./assets/icons/WeekIcon.svg"
import ImpIcon from "./assets/icons/ImpIcon.svg"
import DayIcon from "./assets/icons/DayIcon.svg"
import Button from "./Button";

export default function Dashboard(props){
    return(
        <div className="container">
            <div className="row">
                <div className="dashboard-left-col">
                    <div className="ProfileIcon"><img src={ProfileIcon} /></div>
                        <div className="Icon_list">
                            <Button onClick={()=>{console.log("Voice Command")}} title="Voice Command" icon={VoiceIcon}/>
                            <Button onClick={()=>{console.log("My Day")}} title="My Day" icon={DayIcon}/>
                            <Button onClick={()=>{console.log("Important")}} title="Important" icon={ImpIcon}/>
                            <Button onClick={()=>{console.log("My Week")}} title="My Week" icon={WeekIcon}/>
                        </div>    
                </div>
                <div className="dashboard-right-col">

                </div>
            </div>
        </div>
    )
}

