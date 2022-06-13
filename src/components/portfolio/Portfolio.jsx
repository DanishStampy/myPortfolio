import React from "react";
import "./portfolio.css";
import data from './portfolioData.js'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, image_alt, title, github_link}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={image_alt} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github_link}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
