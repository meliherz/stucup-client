import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Button } from "react-bootstrap";


function ClubList({clubs}) {    

    const [clubId, setClubId] = useState(null);

    const handleChange = (clubId) => {
        setClubId(clubId);
    }
    return (
        <div className="row" style={{width:"100%", marginTop:"20px", marginBottom:"20px"}}>
            {Object.values(clubs).map((item) => (
                item.map((club) => (
                    <div key={club.id} className="col-md-6 col-lg-4 mb-4">
                        <article className="blog__single-post h-100 translateEffect1">
                            <div className="blog__single-post__image" style={{marginTop:"20px",  textAlign:"center"}}>
                                <Link href={`/clubs/${club?.id}`}>
                                    <img src={club?.clubImage} style={{width:"120px", height:"100px"}} />
                                </Link>
                            </div>
                            <div className="blog__single-post__body">
                                <div className="blog__single-post__content" style={{textAlign:"center"}}>
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
                            <div className="blog__single-post__content" style={{marginTop:"20px", textAlign:"center"}} id={club.id}>
                            <Button onClick={()=> handleChange(club.id)}>Takip Et!</Button>
                            </div>
                        </article>
                    </div>
                    
                ))
            ))}
        </div>
    )
}

export default ClubList;