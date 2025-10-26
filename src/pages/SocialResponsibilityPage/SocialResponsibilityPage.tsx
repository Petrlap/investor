import logo from "../../assets/logo.webp";
import img1 from "../../assets/responsibility/img-1.webp";
import img2 from "../../assets/responsibility/img-2.webp";
import img3 from "../../assets/responsibility/img-3.webp";
import img4 from "../../assets/responsibility/img-4.webp";
import styles from "./SocialResponsibility.module.css";

const SocialResponsibility = () => {
  return (
    <>
      <section>
        <div className={styles.blockImg}>
          <div>
            <h1>Social responsibility</h1>
            <span>
              or a few words about our vision of the role of our business in
              society.
            </span>
            <p>
              It is no secret that by its very nature business is only aimed at
              maximizing profits. This is understandable. But it is also clear
              that business should at least comply with generally accepted norms
              of functioning and interaction with society and the environment.
            </p>
            <img src={logo} alt="Logo" />
          </div>
          <img src={img1} alt="Image 1" />
        </div>
        <div className={`${styles.blockImg} ${styles.blockImgC}`}>
          <img src={img2} alt="Image 2" />
          <div>
            <p>
              Lack of ethical mechanisms of business functioning is fraught with
              all sorts of losses, complications and can bring any single
              society to the brink of existence for a number of reasons. Like a
              person who begins to think about health only when something starts
              to hurt, society usually begins to think about its problems only
              when something in it also starts to "hurt".
            </p>
          </div>
        </div>
        <div className={`${styles.blockImg} ${styles.blockImgC}`}>
          <div>
            <p>
              Unjustifiably thoughtless and consumerist attitude to nature and
              ecology has led to the fact that living conditions have rapidly
              deteriorated (lack of clean water, destruction of the ozone layer
              of the earth, rise in the level of the world's oceans, reduction
              of fertile land and much more).<br></br>
              <br></br>
              It is encouraging that the society on all continents has realized
              the destructiveness of its actions and put into practice the care
              of ecology as the basis of human life and existence.
            </p>
          </div>
          <img src={img3} alt="Image 3" />
        </div>
      </section>
      <section>
        <img src={img4} alt="Image 4" />
        <p>
          <b>
            It is very useful to adopt principles that for centuries have given
            only positive results to individual countries.
          </b>
        </p>
        <p>
          In Japan, for example, principles in relation to society are defined
          by two concepts: "meiwaku" (迷惑), which translates to
          "inconveniencing others," and "mottainai" (勿体ない), which translates
          to cherishing resources. Respect and thrift as a principle of
          existence helps to exist and develop effectively.<br></br>A business
          can do more than just make a profit. Business can and must implement
          the principles of harmonious development, prevent injustice in work
          and in society, work responsibly with contractors and act in
          accordance with ethical standards to be worthy citizens of their
          country.
        </p>
      </section>
      <section>
        <h2>Businesses should be socially responsible towards:</h2>
        <div>
          to society, realizing that the more economically and spiritually
          healthy a society is, the more positively it affects business,
          <br></br>- to the environment and nature in general, as we all
          function in a single ecological space,<br></br>- to the used
          resources, realizing that any resources are not unlimited and it is
          necessary to treat them with care,<br></br>- to the human being in the
          broad sense of the term, realizing that everything that is done by
          people should be somehow directed to the benefit of humanity and the
          human being as the highest stage of development of society,<br></br>-
          to business itself: working on the basis of fair competition, job
          creation, professional training and support for staff, principles of
          fairness in remuneration, partnering with contractors who adhere to
          ethical business practices, making efforts to invest in socially
          important projects, providing jobs for people with physical
          disabilities, avoiding racial injustice, fighting discrimination,
          inequality and injustice, and much more.<br></br>
          Business is part of society. And as a part of it, business should not
          function in this society on principles that may negatively affect it.
          Social responsibility of business, in our opinion, consists in
          harmonious and responsible functioning in society, based on respect
          for society, man and nature.<br></br>
          We, Comforta International Corporation, even though we are at the zero
          point, are already preparing the construction of our business based on
          the principles of social responsibility.<br></br>
          We have decided to heat the production building and warehouses not by
          burning gas, but by using geothermal plants that utilize the natural
          heat of the earth. In terms of one-time costs, this is slightly more
          expensive than a natural gas connection, but it produces zero CO2
          emissions and will result in significant savings on heating costs.
          <br></br>
          In addition, we are looking for a site for our production that does
          not require the destruction of trees.<br></br>Our trademark speaks of
          ecological and naturalness and we will try to live up to it.
        </div>
        <div>
          <p>
            Yes, we are one small young company that is just starting to build
            its new 100% needed project. But like other large and well-known
            companies, we are fully aware of our social responsibility to
            society for all our actions and inactions that can in any way
            negatively affect the environment, human beings and society as a
            whole. And believe me, we will not deviate from our principles and
            we will not let you, dear investors, down!
          </p>
          <img src={logo} alt="Logo" />
        </div>
      </section>
      <section>
        <div>
          <p>
            Присоединяйтесь<br></br>к реальному бизнесу
          </p>
          <p>
            Проект с готовым производством, открытой<br></br>моделью и
            прозрачной юридической структурой
          </p>
        </div>
        <form>
          <input />
          <input />
        </form>
      </section>
    </>
  );
};

export { SocialResponsibility };
