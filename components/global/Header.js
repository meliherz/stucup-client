import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { FiLogOut } from 'react-icons/fi';
import { User } from "@nextui-org/react";
import { useUser } from "../../libs/auth/useAuth";
const Header = () => {

  const { user } = useUser();
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
                <Link className="nav-link" href="/clubs">
                  Kulüpler
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
                <Link className="nav-link" href="/profile">
                  Admin
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
          <ul className="navbar-nav navbar__right d-none d-lg-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link" href="/profile">
                {user?.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/signout">
                <FiLogOut size={25} />
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
