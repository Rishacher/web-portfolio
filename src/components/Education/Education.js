import React, { Fragment } from "react";

import EducationImg from "../asset/education.png";
import EducationData from "../../Data/EducationDataBachelor";
import Degree from "./Degree";
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const languagesDone=EducationData.codingStatus;
    return (
        <Fragment>
            <div className={classes.educationHeader}>
                <div className={classes.eduImg}>
                    <img src={EducationImg} alt="" srcSet="" />
                </div>
                <div className={classes.educationCard}>
                    <h1 style={{color:uiColor}}>Education</h1>
                    <h2 style={{ color: nonThemeColor }}>Coding Statistics and Certifications</h2>
                    <div className={classes.codingInfo}>
                        {
                            languagesDone.map((item,index) =>
                                <div key={index} className={classes.progressBar}>
                                    <label htmlFor={item.name}>{item.name}</label>
                                    <progress id={item.name} value={item.percentDone} max="100"></progress>
                                    <h5>{item.percentDone}%</h5>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Degree />
        </Fragment>
    )
}
export default Education;