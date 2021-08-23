import React from 'react';
import styles from './Teaser.module.css';

const Teaser = ({ title = 'test' }) => {
  return (
    <section className={styles.mTeaser} id="teaser-0">
      <picture>
        <source
          srcSet="https://image.spreadshirtmedia.com/content/f_auto,q_60/v1617696125/MPLP/EarthMonth/EarthDay_MainTeaser_desktop"
          data-srcset="https://image.spreadshirtmedia.com/content/f_auto,q_60/v1617696125/MPLP/EarthMonth/EarthDay_MainTeaser_desktop"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="https://image.spreadshirtmedia.com/content/f_auto,q_50,w_1500/v1617696129/MPLP/EarthMonth/EarthDay_MainTeaser_mobile"
          data-srcset="https://image.spreadshirtmedia.com/content/f_auto,q_50,w_1500/v1617696129/MPLP/EarthMonth/EarthDay_MainTeaser_mobile"
          media="(min-width: 768px)"
        />
        <img
          className="lazyloaded"
          src="https://image.spreadshirtmedia.com/content/f_auto,q_50,w_1000/v1617696129/MPLP/EarthMonth/EarthDay_MainTeaser_mobile"
          data-src="https://image.spreadshirtmedia.com/content/f_auto,q_50,w_1000/v1617696129/MPLP/EarthMonth/EarthDay_MainTeaser_mobile"
          alt="Blond woman in front of trees, wearing a white shirt with a design saying There is no planet B"
        />
      </picture>
      <div className={styles.mTeaser__container + ' container'}>
        <div className={styles.mTeaser__textWrapper}>
          <h1>{title}</h1>
          <a
            href="https://www.spreadshirt.com/shop/clothing/t-shirts/earth-day/"
            className="sprd-button main"
            data-tracking="teaser - Teaser CTA ">
            {' '}
            Shop Consciously{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teaser;
