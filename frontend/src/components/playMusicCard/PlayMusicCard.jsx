import './PlayMusicCard.css'
import ReactAudioPlayer from "react-audio-player";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PlayMusicCard = ({ music }) => {
    return (
        <div className="d-grid gap-2">
            <div>
                <div className="position-relative placeholder-wave">
                    <img
                        src={music?.data?.cover_image}
                        style={{
                            height: "300px",
                            objectFit: "cover",
                            objectPosition: "top"
                        }}
                        className="w-100 rounded"
                        alt=""
                    />
                    <div className="position-absolute top-0 start-0 ps-2 pt-2">
                        <Link to="/">
                            <FaCircleArrowLeft
                                className="fs-2 border text-danger bg-white rounded-circle"
                                style={{opacity: "1"}}
                            />
                        </Link>
                    </div>
                </div>
                <div className="mt-1 p-1">
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
    );
};

export default PlayMusicCard;