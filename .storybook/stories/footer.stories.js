import React from 'react';
import {Footer} from "@components/footer/Footer";
import {FooterWithNavigation} from "@components/footer/FooterWithNavigation";
import "./stories.css";


export default { title: 'Layout/Footer'};


export const footer = () => <Footer />;
export const footerWithNavigation = () => <FooterWithNavigation previous="Accueil" next="Vie personnel"/>;