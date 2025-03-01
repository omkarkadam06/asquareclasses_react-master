import axios from "axios";
import { Apis } from './api_url';
const apiKey = '123456789';

export const ContactForm = async (formvalue) => {
    try {
        const response = await axios.post(Apis.Contactusform, formvalue, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching contact form data:', error);
        throw error;
    }
};
export const LongContactForm = async (formvalue) => {
    try {
        const response = await axios.post(Apis.LongContactusform, formvalue, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching contact form data:', error);
        throw error;
    }
};