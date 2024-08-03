import React from 'react';
import styles from './Services.module.css';
import { BiCheck } from 'react-icons/bi';
import { service } from "@/types/main";

const ServiceElement = ({service}) => {
  return (
    <article className={styles.service}>
      <div className={styles.service__head}>
        <h3>{service.title}</h3>
      </div>
      <ul className={styles.service__list}>
        {
          service.contents.map((el, index) => {
            return <li key={index}>
                    <BiCheck className={styles.service__list_icon} />
                    <p>{el}</p>
                  </li>
          })
        }
      </ul>
    </article>
  );
};

export default ServiceElement;
