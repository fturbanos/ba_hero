import React from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';

function CareerItem(props) {
  return (
    <>
      <li className="career-item">
        <Link className="career-item__link" to={props.path}>
          <h5 className="career-item__title">{props.title}</h5>
        </Link>
        <p class="career-item__description">{props.description}</p>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path={props.path}
        >
          Learn More
        </Button>
      </li>
    </>
  );
}

export default CareerItem;
