import React from 'react';

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="profile-picture" src="/Headshot.jpg" alt="front" />
            </div>
            <div className="flip-card-back">
              <img className="profile-picture" src="/images/42.jpg" alt="back" />
            </div>
          </div>
        </div>
      </div>
      <p>Born and raised in Caracas, Venezuela, I completed most of my studies there, with a notable exception being a year of high school in Connecticut to improve my English skills. It was during this time that I crossed paths with my future wife. Back in Venezuela, a passion for fishing blossomed, with the La Guaira Banks becoming one of my favorite spots in the world. Family dinners were a cherished tradition, sparking an interest in cooking and entertaining. My professional journey started at Toyota of Venezuela, where I thrived as a marketing analyst for eight years, including a transformative 3.5-year stint in Japan with Toyota Motor Corporation. In 2014, drawn by an opportunity with the Stanley Brothers in Denver, I transitioned to the hemp industry, working with Hemp and CBD for five years until the onset of the pandemic. A brief interlude at a wine shop allowed me to delve into my love for wines.</p>

      <p>During my Industrial Engineering studies in Caracas, a four-month venture in Cartagena, Colombia, immersed me in the shrimping business. This knowledge aimed to benefit a shrimp farm project on a friend's land in western Venezuela. Post-graduation, an extended 1.5-year business training in Nagoya, Japan, at the Toyota Motor Corporation headquarters, was followed by a return to Venezuela. A subsequent two-year stint in Tokyo as an Inter-Company Trainee solidified my ties with Toyota. The call to assist a Hemp company in Colorado prompted my move to Denver in 2014. Over five years, I contributed to the burgeoning cannabis industry, focusing on cannabidiol (CBD) and expanding our global reach. Currently, I serve as an advisor to Blue Jay Capital, involved in developing a large hotel with private residences for a major hospitality brand. My journey led me to the University of Denver's Full Stack Bootcamp, culminating in mid-December.</p>

      <p>Now residing near the University of Denver with my wife, our 4-year-old son, and three dogs, my passion for fishing persists. While Colorado introduced me to hunting, particularly for anything edible, my wife and I enjoy playing golf and exploring new destinations whenever time permits.</p>
    </>
  );
}
