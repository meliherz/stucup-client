import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { MdOutlineEmail, MdOutlineCall } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar className="p-0" bg="none" expand="lg">
          <Link className="navbar-brand" href="/">
            <h2 className="logo">Stucup.</h2>
          </Link>
          <Navbar.Toggle
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="togler-icon-inner">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/events">
                  Etkinlikler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blogs">
                  Bloglar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  İletişim
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar__right d-block d-lg-none">
              <li className="nav-item">
                <Link className="nav-link" href="mailto:iletisim@stucup.com">
                  <MdOutlineEmail />
                  iletisim@stucup.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="tel:02125623434">
                  <MdOutlineCall />
                  02125623434
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>

          <ul className="navbar-nav navbar__right d-none d-lg-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link" href="mailto:admin@gmail.com">
                <MdOutlineEmail />
                iletisim@stucup.com
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="tel:0123456789">
                <MdOutlineCall />
                02125623434
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
