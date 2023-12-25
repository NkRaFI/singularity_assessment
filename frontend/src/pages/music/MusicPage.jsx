
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSearchMusicMutation } from '../../features/music/musicSlice';
import { PiUserCircleLight } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";

const MusicPage = () => {
    /**-React Router-**/
    const { pathname } = useLocation()

    /**-RTK-**/
    //mutations
    const [searchMusic, { data: musics }] = useSearchMusicMutation()

    useEffect(() => {
        searchMusic({ query: "" })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [pathname, searchMusic])

    return (
        <section className='container my-4'>
            <div className="row g-4">
                {
                    musics?.data?.map(music => (
                        <div
                            key={music._id}
                            className="col-md-4 col-lg-3"
                        >
                            <div>
                                <div className="position-relative rounded overflow-hidden">
                                    <img
                                        src={music.cover_image}
                                        className='w-100'
                                        alt=""
                                    />
                                    <Link
                                    to={`/music/play/${music._id}`}
                                        className='nav-link position-absolute bottom-0 start-0 w-100 d-flex justify-content-end pe-2 pb-2'
                                    >
                                        <p className='px-3 py-2 bg-danger text-white m-0 d-flex gap-1 rounded-pill align-items-center border small cursor-pointer'>
                                            <BsMusicNoteList className='fs-6' />
                                            <span style={{ letterSpacing: "0.8px" }}>Play</span>
                                        </p>
                                    </Link>
                                </div>
                                <div className='py-2 px-1 d-flex flex-column gap-2'>
                                    <p className='fw-semibold text-primary-emphasis m-0'>{music.title}</p>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <PiUserCircleLight
                                            className='fs-4 text-danger'
                                        />
                                        <span className='small'>{music.artist}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default MusicPage;