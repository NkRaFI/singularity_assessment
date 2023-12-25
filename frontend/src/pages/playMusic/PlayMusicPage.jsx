import { useGetMusicQuery } from "../../features/music/musicSlice";
import { useParams } from "react-router-dom";
import PlayMusicCard from "../../components/playMusicCard/PlayMusicCard";
import ShimmerCard from "../../components/shimmerCard/ShimmerCard";
import { useEffect, useRef } from "react";

const PlayMusicPage = () => {
    /**-React Router-**/
    const { id } = useParams()

    /**-React Hooks-**/
    const bodyRef = useRef()

    /**-RTK-**/
    const { data: music, isFetching: musicFetching } = useGetMusicQuery(id)

    /**-useEffects-**/
    useEffect(() => {
        const scrollableSection = bodyRef.current;
        scrollableSection.scrollTop = scrollableSection.scrollHeight
    }, [music])

    return (
        <div ref={bodyRef} className="container py-2">
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4 d-flex flex-column gap-4">
                    {
                        musicFetching &&
                        <ShimmerCard height="300px" />
                    }
                    <PlayMusicCard music={music} />
                </div>
            </div>
        </div>
    );
};

export default PlayMusicPage;