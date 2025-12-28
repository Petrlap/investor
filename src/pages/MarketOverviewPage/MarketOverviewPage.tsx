import styles from "./MarketOverview.module.css";
import img1 from "../../assets/market/img-1.webp";
import img2 from "../../assets/market/img-2.webp";
import img3 from "../../assets/market/img-3.webp";
import img4 from "../../assets/market/img-4.webp";
import img5 from "../../assets/market/img-5.webp";
import img6 from "../../assets/market/img-6.webp";
import img7 from "../../assets/market/img-7.webp";
import img8 from "../../assets/market/img-8.webp";
import img9 from "../../assets/market/img-9.webp";
import { LittleForm } from "../../components/LittleForm/LittleForm";

const MarketOverview: React.FC = () => {
  return (
    <section className={styles.marketOverview}>
      <div className={styles.head}>
        <div className={styles.headBox}>
          <h1>Market size. Demand dynamics. Growth factors.</h1>
          <img src={img1} className={styles.mob} alt="Banner" />
          <p>
            Global Disposable Hygiene Products Market Research Report-Industry
            Analysis, Size, Share, Growth, Trends and Forecast 2024 to 2033.
          </p>
          <p>
            Global Disposable Hygiene Products Market size is anticipated to
            grow from USD 255.9 Billion in 2024 to USD 403.15 Billion by 2033,
            showcasing a robust Compound Annual Growth Rate (CAGR) of 5.18%
            during the forecast period of 2026 to 2033.
          </p>
        </div>
        <img src={img1} className={styles.desk} alt="Banner" />
      </div>
      <div className={styles.diaper}>
        <img src={img2} alt="Image 1" />
        <p>
          Important note: There are quite a few marketing studies that show
          different market forecasts and indicate different CAGRs. This is
          because all research agencies interpret the product categories that
          fall under this category differently. The data provided takes into
          account THREE categories of hygiene products.
        </p>
        <div className={styles.diaperWrapper}>
          <div className={styles.diaperBox}>
            <p>1. Personal Hygiene Products, which include:</p>
            <ul>
              <li>- Soaps & Body Wash,</li>
              <li>- Hand Sanitizers,</li>
              <li>- Deodorants & Antiperspirants,</li>
              <li>- Women Hygiene Products,</li>
              <li>- Oral Care Products,</li>
              <li>- Baby Care,</li>
              <li>- Others.</li>
            </ul>
          </div>
          <div className={styles.diaperBox}>
            <p>2. Household Hygiene Products, which include:</p>
            <ul>
              <li>- Surface Cleaners,</li>
              <li>- Disinfectants & Sanitizers,</li>
              <li>- Air Fresheners & Purifiers,</li>
              <li>- Laundry Care Products,</li>
              <li>- Others.</li>
            </ul>
          </div>
          <div className={styles.diaperBox}>
            <p>3. Medical & Industrial Hygiene Products, which include:</p>
            <ul>
              <li>- Disposable Gloves,</li>
              <li>- Masks & PPE Kits,</li>
              <li>- Adult Diapers,</li>
              <li>- Antiseptics & Disinfectant Wipers,</li>
              <li>- Others.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.hypieneProduct}>
        <h2>
          The Diaper Market was valued at USD 109,996 Million in 2024 and is
          expected to reach USD 117,695 Million in 2025, eventually growing to
          USD 202,230 Million by 2033, exhibiting a compound annual growth rate
          (CAGR) of 7.0% during the forecast period.
        </h2>
        <p>
          Below, we clearly show the factors that will drive growth in the
          disposable hygiene products market, which is the focus of our project:
        </p>
        <div>
          <img src={img3} alt="Image 2" />
          <img src={img4} alt="Image 3" />
        </div>
        <p>
          The US Diaper Market is experiencing significant growth, driven by
          increasing demand across baby diapers and adult diapers. The market's
          expansion is further fueled by a growing preference for higher-quality
          and more eco-friendly products. As consumer awareness of hygiene and
          comfort rises, there is a notable shift towards premium diaper
          products. The online retail sector is thriving, with more consumers
          opting for the convenience of home delivery. This strong demand for
          innovation and premium care options solidifies the US market's
          position as a leader in the global diaper industry, making it a
          world-first in terms of market development and consumer preference.
        </p>
      </div>
      <div className={styles.textBlock}>
        <p>
          The global diaper market is expanding rapidly, driven by the
          increasing birth rates in developing regions and the growing awareness
          of hygiene in infants and adults. Diapers are essential in maintaining
          cleanliness and comfort, and they are widely used for babies, elderly
          individuals, and even incontinence care. As disposable diaper
          technology improves, consumers have access to more efficient and
          eco-friendly products. The market sees a rise in demand for premium
          diapers, which offer enhanced absorbency, softness, and breathability,
          while also promoting skin health. The demand for biodegradable and
          eco-friendly diapers has also surged in recent years.
        </p>
        <p>
          The diaper market is witnessing several key trends that are reshaping
          the industry. First, there is an increasing preference for premium
          diapers, driven by the demand for better-quality materials such as
          natural fibers, plant-based components, and highly absorbent polymers.
          Additionally, there is a growing inclination towards eco-friendly and
          biodegradable products, which is fueling innovation in the market. As
          of 2024, the market share for eco-friendly diapers has seen a rise of
          approximately 12%. Another prominent trend is the shift towards
          e-commerce platforms for diaper purchases, with online sales growing
          by 15% in recent years.
        </p>
        <p>
          Furthermore, there is an increasing focus on adult diaper, as the
          aging population worldwide contributes to a growing demand for
          incontinence care solutions. Innovations in the form of smart diaper,
          which feature moisture detection and monitoring systems, are also
          gaining traction, especially in developed regions, contributing to an
          approximate 8% growth in this segment.
        </p>
      </div>
      <div className={styles.textImageWrapper}>
        <div className={styles.textImageItem}>
          <div className={styles.textImageBox}>
            <h2>Key market growth drivers:</h2>
            <p></p>
            <ul>
              <li>
                1{")"} rising birth rates, especially in emerging economies;
              </li>
              <li>2{")"} increasing consumer awareness of products;</li>
              <li>3{")"} rising consumer disposable income;</li>
              <li>4{")"} growing demand for eco-friendly hygiene products;</li>
              <li>
                5{")"} expansion of distribution channels and e-commerce
                platforms.
              </li>
            </ul>
          </div>
          <img src={img5} alt="Image 4" />
        </div>
        <div className={styles.textImageItem}>
          <img src={img6} alt="Image 5" />
          <div className={styles.textImageBox}>
            <h2>Market constraints.</h2>
            <p>
              Despite significant growth opportunities, the personal hygiene
              market faces certain challenges:
            </p>
            <ul>
              <li>
                1{")"} Consumer price sensitivity, especially in developing
                regions;
              </li>
              <li>2{")"} High market competition;</li>
              <li>
                3{")"} Possible side effects of some chemical ingredients used
                in hygiene products;
              </li>
              <li>
                4{")"} Limited access to personal hygiene products in
                underdeveloped regions.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.textImageItem}>
          <div className={styles.textImageBox}>
            <h2>Market opportunities.</h2>
            <p>
              The personal hygiene market has several opportunities for growth:
            </p>
            <ul>
              <li>
                1{")"} Entry into emerging markets with a growing middle class
                and increased awareness of hygiene products;
              </li>
              <li>
                2{")"} Developing innovative and environmentally friendly
                personal hygiene products;
              </li>
              <li>
                3{")"} Personalizing products to meet specific consumer needs
                and preferences;
              </li>
              <li>
                4{")"} Training representatives of commercial companies and
                medical institutions in the use of hygiene products in order to
                raise consumer awareness.
              </li>
            </ul>
          </div>
          <img src={img7} alt="Image 6" />
        </div>
      </div>
      <div className={styles.trends}>
        <img src={img8} alt="Image 7" />
        <h2>Market Key Trends</h2>
        <p>Several key trends are shaping the personal hygiene market:</p>
        <p>
          <b>1{")"} Increased Focus on Natural Ingredients:</b> Consumers are
          increasingly seeking products with natural and organic ingredients,
          driving innovation in formulations.
        </p>
        <p>
          <b>2{")"} Personalization of Products:</b> Brands are offering
          personalized hygiene solutions to meet individual consumer needs and
          preferences.
        </p>
        <p>
          <b>3{")"} Sustainability Initiatives:</b> Eco-friendly packaging and
          sustainable production practices are becoming essential in product
          development.
        </p>
        <p>
          <b>4{")"} Rise of Digital Marketing:</b> Brands are leveraging digital
          marketing strategies to enhance visibility and engage with consumers
          effectively.
        </p>
        <p>
          <b>5{")"} Health and Wellness Integration:</b> Personal hygiene
          products are increasingly being marketed as part of a broader health
          and wellness lifestyle.
        </p>
      </div>
      <div className={styles.swot}>
        <h2>SWOT Analysis</h2>
        <div className={styles.swotBlock}>
          <div className={styles.swotItem}>
            <p>Strengths:</p>
            <ul>
              <li>
                Diverse Product Range: A wide variety of products caters to
                different consumer needs and preferences.
              </li>
              <li>
                Strong Demand: Increasing awareness of hygiene practices fuels
                consistent demand for personal care products.
              </li>
              <li>
                Innovation: Continuous advancements in product formulation and
                technology enhance.
              </li>
            </ul>
          </div>
          <div className={styles.swotItem}>
            <p>Weaknesses:</p>
            <ul>
              <li>
                High Competition: Intense competition can lead to price wars,
                impacting profitability for manufacturers.
              </li>
              <li>
                Regulatory Challenges: Compliance with regulations can pose
                challenges, especially for new entrants.
              </li>
              <li>
                Consumer Skepticism: Concerns about product safety and
                effectiveness may deter.
              </li>
            </ul>
          </div>
          <div className={styles.swotItem}>
            <p>Opportunities:</p>
            <ul>
              <li>
                E-commerce Growth: The expansion of online retail channels
                presents significant opportunities for market penetration.
              </li>
              <li>
                Eco-Friendly Trends: The rising demand for sustainable products
                offers opportunities for innovation.
              </li>
              <li>
                Emerging Markets: Targeting developing regions can tap into new
                consumer bases.
              </li>
            </ul>
          </div>
          <div className={styles.swotItem}>
            <p>Threats:</p>
            <ul>
              <li>
                Economic Uncertainty: Economic fluctuations may impact consumer
                spending on personal hygiene products.
              </li>
              <li>
                Regulatory Changes: Changes in regulations regarding product
                safety and labeling can pose challenges for manufacturers.
              </li>
              <li>
                Competition from Private Labels: The rise of private label
                products may impact market.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.informationItem}>
          <h3>Strengths:</h3>
          <p>
            Diverse Product Range: A wide variety of products caters to
            different consumer needs and preferences.
            <br></br>
            Strong Demand: Increasing awareness of hygiene practices fuels
            consistent demand for personal care products.
            <br></br>
            Innovation: Continuous advancements in product formulation and
            technology enhance.
          </p>
        </div>
        <div className={styles.informationItem}>
          <h3>Weaknesses:</h3>
          <p>
            High Competition: Intense competition can lead to price wars,
            impacting profitability for manufacturers.
            <br></br>
            Regulatory Challenges: Compliance with regulations can pose
            challenges, especially for new entrants.
            <br></br>
            Consumer Skepticism: Concerns about product safety and effectiveness
            may deter.
          </p>
        </div>
        <div className={styles.informationItem}>
          <h3>Opportunities:</h3>
          <p>
            E-commerce Growth: The expansion of online retail channels presents
            significant opportunities for market penetration.
            <br></br>
            Eco-Friendly Trends: The rising demand for sustainable products
            offers opportunities for innovation.
            <br></br>
            Emerging Markets: Targeting developing regions can tap into new
            consumer bases.
          </p>
        </div>
        <div className={styles.informationItem}>
          <h3>Threats:</h3>
          <p>
            Economic Uncertainty: Economic fluctuations may impact consumer
            spending on personal hygiene products.
            <br></br>
            Regulatory Changes: Changes in regulations regarding product safety
            and labeling can pose challenges for manufacturers.
            <br></br>
            Competition from Private Labels: The rise of private label products
            may impact market.
          </p>
        </div>
      </div>
      <div className={`${styles.trends} ${styles.desk}`}>
        <img src={img8} alt="Image 7" />
        <h2>Market Key Trends</h2>
        <p>Several key trends are shaping the personal hygiene market:</p>
        <p>
          <b>1{")"} Increased Focus on Natural Ingredients:</b> Consumers are
          increasingly seeking products with natural and organic ingredients,
          driving innovation in formulations.
        </p>
        <p>
          <b>2{")"} Personalization of Products:</b> Brands are offering
          personalized hygiene solutions to meet individual consumer needs and
          preferences.
        </p>
        <p>
          <b>3{")"} Sustainability Initiatives:</b> Eco-friendly packaging and
          sustainable production practices are becoming essential in product
          development.
        </p>
        <p>
          <b>4{")"} Rise of Digital Marketing:</b> Brands are leveraging digital
          marketing strategies to enhance visibility and engage with consumers
          effectively.
        </p>
        <p>
          <b>5{")"} Health and Wellness Integration:</b> Personal hygiene
          products are increasingly being marketed as part of a broader health
          and wellness lifestyle.
        </p>
      </div>
      <div className={styles.bottomBlock}>
        <img src={img9} alt="Image 8" />
        <p>
          <b>Dear investors!</b>
        </p>
        <p>
          We have tried to give you a concise overview of the market we plan to
          enter and successfully develop with your help. Various studies show
          that this is a simple, understandable, and predictable market with
          positive dynamics and good returns, allowing us to reward our
          investors.<br></br>
          The hygiene products market is not expected to experience any shocks
          or decline, as these are everyday goods that people have long been
          accustomed to and are not going to give up.<br></br>
          We hope that the information provided is sufficient for you to
          understand the market, its growth factors, and its prospects.
        </p>
      </div>
      <LittleForm />
    </section>
  );
};

export { MarketOverview };
