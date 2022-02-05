import { Link } from "react-router-dom";
import { Accordion, Nav, Tab } from "react-bootstrap";
import FooterContact from "../components/FooterContact";
import PageTitleBanner from "../components/PageTitleBanner";
import Layout from "../layout/Layout";
// import Accordion from "../src/compponents/Accordion";
// import Chevron from "../src/compponents/Chevron";
// import { Radio } from "antd"
import React from 'react';
import RadioButton from "../components/radio/RadioButton";
// import CollapseButton from "../src/components/collapse/Collapse";


const MockTest = () => {
  
  return (
    <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
      <PageTitleBanner pageName="Time and Work " />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course_details mb-md-80 wow fadeInDown">
              <div className="comment_form">
                      <div className="form-group">
                      <h5><b>Excerise - General Questions</b></h5>
                      <p>
                        1. A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is_______
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        2. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        3. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        4. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <div className="form-group">
                      <p>
                        5. A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in ____
                      </p>
                      <RadioButton>
                       </RadioButton>
                      </div>
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                     Submit
                    </a>
                    </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterContact />
    </Layout>
  );
};

export default MockTest;
