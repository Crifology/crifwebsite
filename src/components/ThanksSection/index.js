import React from 'react';
import { HeroBg, HeroContent, HeroH1, HeroP } from '../HeroSection/HeroElements';
import { VideoBg } from '../HeroSection/HeroElements';
import {Button} from '../ButtonElements'
import Video from '../../videos/oceanvid.mp4';

export const Thanks = () => {
    return (
        <>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>Thank you for sending the message! </HeroH1>
                <HeroP>
                    It has been sent to my inbox, and I will get back to the email you gave ASAP!
                </HeroP>
        </HeroContent>
        <Button to='/'>Return to Crifology.com</Button>
        </>
        
    )
}

