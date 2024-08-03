import React from 'react';
import styles from './Services.module.css';
import { BiCheck } from 'react-icons/bi';
import SectionWrapper from "../SectionWrapper";
import ServiceElement from './element';
import { service } from '@/types/main'

const Services = ({service}) => {
  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <div className="text-4xl text-center">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className={`container ${styles.services__container}`}>
      {
        service.map((el, index) => <ServiceElement service={el} key={index}/>)
      }
      </div>
  </SectionWrapper>
  );
};

export default Services;
