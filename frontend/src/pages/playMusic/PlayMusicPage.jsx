import "./PlayMusic.css"
import ReactAudioPlayer from "react-audio-player";
import { useGetMusicQuery } from "../../features/music/musicSlice";
import { useParams } from "react-router-dom";

const PlayMusicPage = () => {
    /**-React Router-**/
    const { id } = useParams()

    /**-RTK-**/
    const { data: music } = useGetMusicQuery(id)
    console.log(music)
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4 d-flex flex-column gap-4">
                    <div>
                        <img
                            src={music?.data?.cover_image}
                            className="w-100 rounded"
                            alt=""
                        />
                        <div className="mt-2 p-1">
                            <p
                                className="fs-3 fw-bold m-0"
                            >{music?.data.title}</p>
                            <p className="m-0 text-secondary fs-5 fw-semibold">
                                By: {music?.data?.artist}
                            </p>
                        </div>
                    </div>
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