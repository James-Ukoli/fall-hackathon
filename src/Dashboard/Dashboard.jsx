import React from "react";
import { YearlyProgress } from "./components/YearlyProgress";
import { MonthlyProgress } from "./components/MonthlyProgress";
import { MyBadges } from "./components/MyBadges";
import ImageCarousel from "./components/ImageCarousel"; // Import the ImageCarousel component
import { courses } from "../data"; // Import the courses data
import "./Dashboard.css";

function Dashboard({ handleSend }) {
  return (
    <div className="body">
      <div className="dashboard-metrics-container">
        <MonthlyProgress className="monthly-progress" />
        <YearlyProgress className="yearly-progress" />
        <MyBadges className="my-badges" />
      </div>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="welcome-message">
            Welcome back Jane! Ready to learn?
          </h1>
          <div></div>
        </div>
        <div className="dashboard-content">
          <div className="overlap">
            <div />
          </div>
          <h3>Pick Up Where You Left Off</h3>
          <ImageCarousel  />
          <h3>
            Because You Liked&nbsp;
            <em>Traditional Italian Cooking</em>
          </h3>
          <ImageCarousel  />
          <h3>Popular Right Now</h3>
          <ImageCarousel  />
          <h3>Discover</h3>
          <ImageCarousel  />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
