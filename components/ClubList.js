import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';


function ClubList({clubs}) {    

    const [clubId, setClubId] = useState(null);

    const handleChange = (clubId) => {
        setClubId(clubId);
    }
    return (
        <div className="row">

            {Object.values(clubs).map((item) => (
                item.map((club) => (
                    <div key={club.id} className="col-md-6 col-lg-4 mb-4">
                        <article className="blog__single-post h-100 translateEffect1">
                            <div className="blog__single-post__image">
                                <Link href={`/clubs/${club?.id}`}>
                                    <img src="https://media.istockphoto.com/id/1385170533/tr/foto%C4%9Fraf/business-people-greet-each-other-during-a-coffee-break-at-a-conference.jpg?s=1024x1024&w=is&k=20&c=BE9t7LdK65OXjk-JNiWWt6owg8ZQZIRpiQf5WIckTJQ=" style={{width:"170px", height:"100px"}} />
                                </Link>
                            </div>
                            <div className="blog__single-post__body">
                                <div className="blog__single-post__content">
                                    <h2 className="fs-4">
                                        <Link href={`/clubs/${club?.id}`}>
                                            {club?.clubname}
                                        </Link>
                                    </h2>
                                    <p className="m-0">
                                        {club?.description?.slice(0, 95)}..
                                    </p>
                                </div>
                                <div className="blog__single-post__meta">
                                    <div className="d-flex gap-2 align-items-center">
                                        {club?.university.universityName}
                                    </div>
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={()=> handleChange(club.id)}>dsadas</button>
                        </article>
                    </div>
                    
                ))
            ))}
        </div>
    )
}

export default ClubList;