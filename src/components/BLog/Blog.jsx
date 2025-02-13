import "./BLog.scss";

import laptop from "../../assets/laptop.png";
import radio from "../../assets/radio.png";
import windowModal from "../../assets/windowModal.png";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog__content container">
        <h2 className="blog__title">
          Nam at pulvinar dui, ornare ullamcorper nulla cursus rhoncus velit?
        </h2>

        <div className="blog__cols">
          <div className="blog__col">
            <img src={laptop} alt="Laptop" className="blog__col-img" />
            <h4 className="blog__col-title">Lorem ipsum dolor sit</h4>
            <ul className="blog__col-list">
              <li className="blog__col-item">
                Fusce imperdiet leo lobortis luctus.
              </li>
              <li className="blog__col-item">Phasellus scelerisque dolor.</li>
              <li className="blog__col-item">
                Mauris euismod metus quis eros.
              </li>
            </ul>
          </div>

          <div className="blog__col">
            <img src={radio} alt="Laptop" className="blog__col-img" />
            <h4 className="blog__col-title">Aenean sagittis mauris</h4>
            <ul className="blog__col-list">
              <li className="blog__col-item">Phasellus scelerisque dolor.</li>
              <li className="blog__col-item">
                Proin id est laoreet, aliquet leo eget.
              </li>
              <li className="blog__col-item">
                Vestibulum vitae turpis id metus.
              </li>
            </ul>
          </div>

          <div className="blog__col">
            <img src={windowModal} alt="Laptop" className="blog__col-img" />
            <h4 className="blog__col-title">Turpis id metus vestibulum </h4>
            <ul className="blog__col-list">
              <li className="blog__col-item">Vestibulum quis diam non.</li>
              <li className="blog__col-item">
                Donec consectetur leo at ultrices.
              </li>
              <li className="blog__col-item">In euismod lacus nec magna.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
