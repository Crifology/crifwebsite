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
        
            </ProjectsWrapper>
        </ProjectsContainer>

    )
}
