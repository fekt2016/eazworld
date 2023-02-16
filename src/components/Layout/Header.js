import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import photo from '../../assest/phpne.jpeg';
import ButtonBlack from '../UI/ButtonBlack';

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
      <h1 className={classes.heading}>
        buy bitcoin & other crypto currency
      </h1>
      <p className={classes.para}>Start Your Order With Just $10 In Less Than 10minutes</p>
    <ButtonBlack><Link to='/getstarted'>Get Started with 10$</Link> </ButtonBlack>
      </div>

      <img className={classes.img} src={photo} alt="headerphoto"/>

    </header>
  )
}

export default Header;