import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiTimeFill } from "react-icons/ri";
import { HiShare } from "react-icons/hi";
import { getObjectActions } from "../apollo/actions"


function ClubList() {
    const [getObjects] = getObjectActions["useGetClubs"]();
    const [clubsData, setClubsData] = useState([]);

    useEffect(() => {
        const getClubs = async () => {
            const { data } = await getObjects();
            return setClubsData(data)
        };
        getClubs();
    }, [getObjects]);
console.log(clubsData)
    return (
        <div className="row">
            {Object.values(clubsData).map((item) => (
                item.map((club) => (
                    <div key={club.id} className="col-md-6 col-lg-4 mb-4">
                        <article className="blog__single-post h-100 translateEffect1">
                            <div className="blog__single-post__image">
                                <Link href={`/clubs/${club?.id}`}>
                                    <Image src={club?.clubImage} width={170} height={100} />
                                </Link>
                            </div>
                            <div className="blog__single-post__body">
                                <div className="blog__single-post__content">
                                    <h2 className="fs-4">
                                        <Link href={`/clubs/${club?.id}`}>
                                            {club.clubname}
                                        </Link>
                                    </h2>
                                    <p className="m-0">
                                        {club?.description.slice(0, 95)}..
                                    </p>
                                </div>
                                <div className="blog__single-post__meta">
                                    <div className="d-flex gap-2 align-items-center">
                                        {club?.university}
                                    </div>
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                ))
            ))}
        </div>
    )
}

export default ClubList;