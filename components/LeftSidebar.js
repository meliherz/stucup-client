import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getObjectActions } from '../apollo/actions/index'

function LeftSidebar() {
  const [getObjects] = getObjectActions["useGetUniversities"]();
  const [universityData, setUniversitiesData] = useState([]);

  useEffect(() => {
    const getUnivesities = async () => {
      const { data } = await getObjects();
      return setUniversitiesData(data)
    };
    getUnivesities();
  }, [getObjects]);

  return (
    <div className='left-sidebar'>
      <h3>Üniversiteler</h3>
      <hr></hr>
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
    </div>
  )
}

export default LeftSidebar;