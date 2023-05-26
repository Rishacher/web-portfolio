import React from "react";
import styles from "./project.module.css";
import UnsplashCarousel from './Carousel.js';
import BtnModal from './BtnModal';
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    return (
        <React.Fragment>
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>My Projects</h1>
            <UnsplashCarousel />
            <BtnModal />
        </React.Fragment>
    )
};

export default Projects;