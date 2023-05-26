import React from "react";

import SocialData from "../../Data/SocialData";
import GitHubIcon from '@mui/icons-material/GitHub';
import {vk as VkIcon} from '../asset/svg/svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import classes from "./socialLinks.module.css";
import { useSelector } from "react-redux";
const SocialLinks = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className={`${classes.socialLinks} ${props.className}`} style={{color:nonThemeColor}}>
            <a href={SocialData.githubLink} ><GitHubIcon fontSize="large" /></a>
            <a href={SocialData.instaLink}><InstagramIcon fontSize="large" /></a>
            <a href={SocialData.vkLink}><VkIcon /></a>
            <a href={SocialData.emailLink}><EmailIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;