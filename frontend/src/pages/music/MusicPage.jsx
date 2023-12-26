
import { useCallback, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSearchMusicMutation } from '../../features/music/musicSlice';
import MusicCard from '../../components/musicCard/MusicCard';
import ShimmerCard from '../../components/shimmerCard/ShimmerCard';

const MusicPage = () => {
    /**-React Router-**/
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams()

    /**-RTK-**/
    //mutations
    const [searchMusic, { data: musics, isLoading: musicsLoading }] = useSearchMusicMutation()

    const query = searchParams.get("query")

    /**-useEffect-**/
    useEffect(() => {
        if (query) {
            searchMusic({ query: query })
                .then()
                .catch(err => console.log(err))
        } else {
            searchMusic({ query: "" })
                .then()
                .catch(err => console.log(err))
        }
    }, [pathname, query, searchMusic])

    /**-Loading Screen-**/
    const card = useCallback(() => {
        return (
            <div className="container my-lg-4">
                <div className="row g-3">
                    {
                        [...Array(20).keys()].map(i => (
                            <div key={i} className="col-12 col-md-4 col-lg-3">
                                <ShimmerCard height='250px' />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }, [])


    if (musicsLoading) {
        return card()
    }

    return (
        <section className='container my-lg-4'>
            <div className="row g-4">
                <div className="col-12">
                    {
                        query && <h4 className='fw-semibold pt-3'>Results for: {query}</h4>
                    }
                </div>
                {
                    musics?.data?.map(music => (
                        <div
                            key={music._id}
                            className="col-12 col-md-4 col-lg-3"
                        >
                            <MusicCard music={music} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default MusicPage;