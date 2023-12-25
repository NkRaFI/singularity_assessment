import "./PlayMusic.css"
import ReactAudioPlayer from "react-audio-player";
import { useGetMusicQuery } from "../../features/music/musicSlice";
import { useParams } from "react-router-dom";

const PlayMusicPage = () => {
    /**-React Router-**/
    const { id } = useParams()

    /**-RTK-**/
    const { data: music } = useGetMusicQuery(id)

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4">
                    <img
                        src={music?.data?.cover_image}
                        className="w-100 rounded"
                        alt=""
                    />
                    <p
                        className="fs-3 fw-bold"
                    >{music?.data.title}</p>
                    <ReactAudioPlayer
                        src={music?.data?.url}
                        autoPlay
                        controls
                        className="audio-player"
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayMusicPage;