import React from "react";
import "../../App.css";
import "../../styles/css/Careers.css";
import CareerItem from "../CareerItem";

export default function Careers() {
  return (
    <div className="careers">
      <h1>We are Looking for a Few Good Men.</h1>
      <div className="careers__container">
        <ul>
          <CareerItem
            title="Backend Developer"
            description="A Backend web developer is responsible for writing server-side logic to be able to 
            process data and serve to frontend applications. They should possess good critical thinking skills 
            and proactive in collaboration in order to provide cost and effective solutions."
            path="/careers/backend-developer"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          />
          <CareerItem
            title="UI/UX Designer"
            description="A designer effectively translates a set of requirements or concept into 
            a visually appealing, well-marked up, functional design which 
            we then package efficiently to the next step of development."
            path="/careers/ui-ux-designer"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          />
        </ul>
        <ul>
          <CareerItem
            title="Frontend Developer"
            description="A Front End web developer is responsible for collaborating with the design 
            team in implementing their designs and transforming them into working, 
            interactive and effective user experience while closely working with the backend team 
            for functionalities and with the data administration team for data structure visualization."
            path="/careers/frontend-developer"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          />
          <CareerItem
            title="Data Administrators"
            description="Data Administrator works closely with the discovery team to ensure 
            all aspects of a project are fully documented and understood. With full understanding, 
            a data administrator utilize his/her knowledge of Magento native functionality to 
            provide an effective & efficient solution for custom requirements."
            path="/careers/data-admin"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          />
        </ul>
      </div>
    </div>
  );
}
