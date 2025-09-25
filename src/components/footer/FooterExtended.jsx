import styles from "./FooterExtended.module.css";

export default function FooterExtended({
  name,
  // = "Casino Project"
  logo,
  // = "/next.svg"
  navItems,
  /* = [
    { href: "/slots", label: "Слоты" },
    { href: "/bet", label: "Ставки" },
    { href: "/games", label: "Игры" },
    { href: "/login", label: "Вход" },
    { href: "/faqs", label: "Часто задаваемых вопросов" },
    { href: "/about", label: "О нас" },
    { href: "/terms", label: "Правила" },
    { href: "/privacy", label: "Конфиденциальность" },
    { href: "/contact", label: "Контакты" },
  ]
  */
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__group}>
            <div className={styles.footer__col}>
              <div className={styles.footer__logo}>
                <img src={logo} alt="footer logo" style={{ width: "150px" }} />
              </div>
              <nav className={styles.footer__nav}>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <ul className={styles.footer__cards}>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/mail_icon.svg" alt="" />
                  </a>
                </li>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/x_twitter_icon.svg" alt="" />
                  </a>
                </li>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/facebook_icon.svg" alt="" />
                  </a>
                </li>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/instagram_icon.svg" alt="" />
                  </a>
                </li>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/telegram_icon.svg" alt="" />
                  </a>
                </li>
                <li className={styles.card__item}>
                  <a href="#">
                    <img src="/footer/whatsapp_icon.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h3 className={styles.footer__title}>Trust & Fair Play</h3>
              <div className={styles.footer__certificates}>
                <div className={styles.footerAge}>
                  <div className={styles.footerAge__icon}>
                    <img src="/footer/18+.svg" alt="age icon" />
                  </div>
                  <div className={styles.footerAge__text}>
                    Players need to be 18+ in order to register. Underage
                    gambling is prohibited.
                  </div>
                </div>
                <ul className={styles.footerGambling}>
                  <li className={styles.footerGambling__item}>
                    <a href="https://www.begambleaware.org/?cxd=cx-95_365180_lcb">
                      <img
                        src="/footer/be_gamble_aware.svg"
                        alt="be gamble aware"
                      />
                    </a>
                  </li>
                  <li className={styles.footerGambling__item}>
                    <a href="https://www.gamblingtherapy.org/?cxd=cx-95_365180_lcb">
                      <img
                        src="/footer/gambling_therapy.svg"
                        alt="gambling therapy"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__trust}></div>
            </div>
            <div className={styles.footer__col}>
              <h3 className={styles.footer__title}>Accepted Payment Methods</h3>
              <ul className={styles.footer__payments}>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/visa.svg" alt="" />
                    <span className={styles.payment__icon}>Visa</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/mastercard.svg" alt="" />
                    <span className={styles.payment__icon}>MasterCard</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/paypal.svg" alt="" />
                    <span className={styles.payment__icon}>PayPal</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/bitcoin.svg" alt="" />
                    <span className={styles.payment__icon}>Bitcoin</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/ethereum.svg" alt="" />
                    <span className={styles.payment__icon}>Ethereum</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/dbs.svg" alt="" />
                    <span className={styles.payment__icon}>DBS Bank</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/usdt.svg" alt="" />
                    <span className={styles.payment__icon}>USDT</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/uob.svg" alt="" />
                    <span className={styles.payment__icon}>UOB Bank</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/standart_chartered(1).svg" alt="" />
                    <span className={styles.payment__icon}>
                      Standart Chartered
                    </span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/PayNow.svg" alt="" />
                    <span className={styles.payment__icon}>PayNow</span>
                  </a>
                </li>
                <li className={styles.payment__item}>
                  <a href="#">
                    <img src="/footer/google-pay.svg" alt="" />
                    <span className={styles.payment__icon}>GPay</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__special}></div>
          <div className={styles.footer__copyright}>
            <h3> {name} - Your Ultimate Gaming destination! </h3>
            <h4>Copyright © 2025</h4>
            <p>
              Dive into the world of {name} and experience unmatched gaming
              excitement. Discover top-notch games, exclusive promotions, and
              complete security.
            </p>
            <p>
              Sign up at {name} today and embark on your journey to fortune.
              Enjoy every moment with thrill and confidence!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
