import React from 'react';
import { ContactContainer, 
        ContactWrap, 
        ContactIcon, 
        ContactContent,
        Form, 
        FormH1, 
        FormLabel,
        FormInput, 
        FormButton,
        ContactBg,
        VideoBg } from './ContactElements';
import Video from '../../videos/spacetheme.mp4';
import emailjs from 'emailjs-com';
import {useNavigate} from 'react-router-dom'

export const ContactForm = () => {
    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('crifology_gmail.com', 'emails_crifology', e.target, 'user_kuI4AIJw3gzrshRW4lqab')
        .then(() => navigate('/thanks'))
        .catch(err => {
            //handle error with UI that shows error
            console.log(err)
        });
    }

    


    return (
        <>
            <ContactContainer>
                <ContactWrap>
                    <ContactBg>
                    <ContactIcon to='/'>Back to Site!</ContactIcon>
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    </ContactBg>
                    <ContactContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1>Please Reach Out to Me!</FormH1>
                            <FormLabel htmlFor='for'>Your Name</FormLabel>
                            <FormInput type="text" name="name" required />
                            <FormLabel htmlFor='for'>Your Email</FormLabel>
                            <FormInput type="email" name="email" required />
                            <FormLabel htmlFor='for'>Message to Me</FormLabel>
                            <FormInput type="text" name="message" col="20" rows="8" required='Required' />
                            <FormButton type='submit'>Submit</FormButton>
                        </Form>
                    </ContactContent>
                </ContactWrap>
            </ContactContainer>
        </>
    )
}