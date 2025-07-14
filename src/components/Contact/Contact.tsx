import type { JSX } from 'react';
import {Testimonials , ContactElement }from "./index"
import {Footer} from "../Footer/Footer"

//for test
export const Contact = (): JSX.Element => {
    return (
        <div>
            <Testimonials/>
            <ContactElement/>
            <Footer/>
        </div>
    );
};