import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getObjectActions } from '../apollo/actions/index'

function toggleMenu() {
  const [getObjects] = getObjectActions["useGetUniversities"]();
  const [universityData, setUniversitiesData] = useState([]);

  useEffect(() => {
    const getUnivesities = async () => {
      const { data } = await getObjects();
      return setUniversitiesData(data)
    };
    getUnivesities();
  }, [getObjects]);
  console.log(Object.values(universityData))
  return (
    <Navbar className="p-0" bg="none" expand="lg">
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
          {Object.values(universityData).map((item) => (
            item.map((university) => (
              <li className="nav-item" key={university.id}>
                <Link href={`/university/${university.slug}`}>
                  {university.universityName}
                </Link>
              </li>
            ))
          ))}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default toggleMenu