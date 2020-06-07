import React from 'react';
import './footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';


export default function Footer() {
    return (
        <div className='footer'>
            <div className='center'>
                <IconButton onClick={() => window.open('https://www.instagram.com/ricky_feria_music/')} aria-label="ig" >
                    <InstagramIcon className='icon' fontSize='large' />
                </IconButton>
                <IconButton onClick={() => window.open('https://www.facebook.com/RickyFeriaGuitar')} aria-label="fb" >
                    <FacebookIcon className='icon' fontSize='large' />
                </IconButton>
                <IconButton onClick={() => window.open('https://www.youtube.com/channel/UCL_E9INNCDg84_Cvx35ydHw?view_as=subscriber')} aria-label="yt" >
                    <YouTubeIcon className='icon' fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
}