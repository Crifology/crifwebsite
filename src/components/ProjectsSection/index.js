import React from 'react';
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectIconsLink} from './ProjectsElements'
import Icon1 from '../../images/candycrush.png';
import Icon2 from '../../images/pizzahutt.png';
import Icon3 from '../../images/covid19.png';
import Icon4 from '../../images/schoolbooks.jpg'

export const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects!</ProjectsH1>
            <ProjectsWrapper>

                /*
                <ProjectsCard>
                <ProjectIconsLink href="//crifcandycrush.herokuapp.com/" target="_blank" aria-label="CrifCandyCrush">
                    <ProjectsIcon src={Icon1} />
                </ProjectIconsLink>
                <ProjectsH2>CrifCandyCrush - A CandyCrush Emulator</ProjectsH2>
                <ProjectsP>This was my very first application that I used Javascript to create
                It should be noted that minimal CSS and HTML was used, but was for the functionality
                of the game rather than aestetics. </ProjectsP>
                </ProjectsCard>
                */

                <ProjectsCard>
                <ProjectIconsLink href="//pizzaface.crifology.com/" target="_blank" aria-label="PizzaFace!">
                <ProjectsIcon src={Icon2} />
                </ProjectIconsLink>
                <ProjectsH2>PizzaFace! 2D Platform Jumper</ProjectsH2>
                <ProjectsP>My second gaming application using Javascript with KaboomJS -
                Note that I also deployed through Netlify as it's live! Will be working to update over time...
                ENJOY! </ProjectsP>
                </ProjectsCard>

                
                <ProjectsCard>
                <ProjectIconsLink href="//crifshopplusplus.netlify.app" target="_blank" aria-label="ShopPlus Clone Store">
                <ProjectsIcon src={Icon3} />
                </ProjectIconsLink>
                <ProjectsH2>ShopPlus+ Amazon Clone Creation</ProjectsH2>
                <ProjectsP>My attempt at making a working eCommerce store using Login creations, order histories, and confirm purchases through backend. </ProjectsP>
                </ProjectsCard>
                

                /*
                <ProjectsCard>
                <ProjectIconsLink href="//alphonsoscholarshipfund.s2.48in48.org/" target="_blank" aria-label="Covid 19 API">
                <ProjectsIcon src={Icon4} />
                </ProjectIconsLink>
                <ProjectsH2>48in48 Project - Wordpress Website for Alphonso Scholarship Fund Inc</ProjectsH2>
                <ProjectsP>Using Wordpress and working with 48in48's team of individuals, we constructed a complete multi-page website using 
                Wordpress features within 48 hours.</ProjectsP>
                </ProjectsCard>
                */
        
            </ProjectsWrapper>
        </ProjectsContainer>

    )
}
