import Link from 'next/link'


function LeftSidebar({ unis, handleUniversityClick, handleAllUniversities }) {

  const handleUniversity = (university) => {
    handleUniversityClick(university);
  };
  return (
    <div className='left-sidebar'>
      <a href='#' onClick={()=>{handleAllUniversities()}}>
      <h3>Üniversiteler</h3>
      </a>
      <hr></hr>
      <ul className="navbar-nav">
        {unis.map((university) => (
          <li className="nav-item" key={university.id}>
            <a href="#" onClick={() => handleUniversity(university)}>
              {university.universityName}
            </a>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftSidebar;