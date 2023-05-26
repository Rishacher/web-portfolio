import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";
import UniversityImg2 from "../../Data/universityLogo2.png"

import Card from "../UI/Card";
import EducationDataBachelor from "../../Data/EducationDataBachelor"
import EducationDataMaster from "../../Data/EducationDataMaster"
import { useSelector } from "react-redux";

function Degree(props) {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Degree
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg} alt="degree" srcSet="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationDataBachelor.couseStartYear} - {EducationDataBachelor.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationDataBachelor.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationDataBachelor.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationDataBachelor.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg2} alt="degree" srcSet="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationDataMaster.couseStartYear} - {EducationDataMaster.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationDataMaster.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationDataMaster.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationDataMaster.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Degree;