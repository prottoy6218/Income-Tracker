import React from "react";
import Layout from "./layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <h1 className="home-page-heading">
          Take Control Of <span>Your Money</span>
        </h1>
        <p className="home-page-details">
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
