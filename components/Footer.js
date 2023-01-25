import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// social media icon imports
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
  return (
    <BottomNavigation>
        <BottomNavigationAction label="FaceBook" value="recents" icon={<FacebookIcon style={{fill: "#3b5998"}}/>} />
        <BottomNavigationAction label="Twitter" value="favorites" icon=<TwitterIcon style={{fill: "#1DA1F2"}}/>/>
        <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon style={{fill: " #C13584"}}/>} />
        <BottomNavigationAction label="YoutubeIcon" value="folder" icon={<YouTubeIcon style={{fill: "#c4302b"}}/>}/>
    </BottomNavigation>
  )
}
