
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchMusicMutation } from '../../features/music/musicSlice';
import { PiUserCircleLight } from "react-icons/pi";

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
                                <div className="rounded overflow-hidden">
                                    <img
                                        src={music.cover_image}
                                        className='w-100'
                                        alt=""
                                    />
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