import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-wrapper-inner">
            <div className="footer-header full-wrap">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-inner">
                  <span className="footer-image-wrapper">
                    <img
                      src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-footer-logo.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="half-wrap">
              <div className="footer-contact">
                <div className="footer-contact-title">
                  <div className="footer-contact-title-wrapper">
                    <h3 className="title">
                      Spaces that improve your quality of life - Request an
                      estimate
                    </h3>
                  </div>
                </div>
                <div className="half-wrap">
                  <div className="footer-contact-phone">
                    Phone <br />
                    <a href="">+61 (0) 3 8376 6284</a>
                  </div>
                </div>
                <div className="half-wrap">
                  <div className="footer-contact-phone">
                    Email <br />
                    <a href="">noreply@envato.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="half-wrap">
              <div className="footer-menu">
                <div className="footer-menu-column">
                  <div className="footer-menu-column-wrapper">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>SHOP
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>PROJECTS
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>FAQ
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>SERVICES
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>ABOUT US
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-column">
                  <div className="footer-menu-column-wrapper">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>CHAIRS
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>BEDS
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>TABLETS
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa-solid fa-minus"></i>SOFAS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-wrap">
              <div className="footer-copyright-wrapper">
                <div className="copyright-wrapper">
                  <div className="copyright-wrapper-inner">
                    <div className="copyright">
                      © 2023 Betheme by <a href="">Muffin Group</a> | All Rights
                      Reserved | Powered by <a href="">Wordpress</a>
                    </div>
                  </div>
                </div>
                <div className="payment-wrapper">
                  <div className="payment-wrapper-inner">
                    <ul>
                      <li>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/PayPal.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Visa.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Mastercard.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Maestro.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Stripe.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
