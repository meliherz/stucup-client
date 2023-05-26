import Link from 'next/link'


function LeftSidebar({ unis, handleUniversityClick }) {


  const handleUniversity = (university) => {
    handleUniversityClick(university);
  };
  return (
    <div className='left-sidebar'>
      <h3>Üniversiteler</h3>
      <hr></hr>
      <ul className="navbar-nav">
        {unis.map((university) => (
          <li className="nav-item" key={university.id}>
            <a href="#" onClick={() => handleUniversity(university)}>
              {university.universityName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftSidebar;