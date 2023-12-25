import "./MusicCard.css"
import { BsMusicNoteList } from 'react-icons/bs';
import { PiUserCircleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const MusicCard = ({ music }) => {
    return (
        <div>
            <div className="position-relative rounded overflow-hidden">
                <img
                    src={music.cover_image}
                    className='w-100'
                    alt=""
                    loading="lazy"
                />
                <div className='position-absolute bottom-0 start-0 w-100 d-flex justify-content-end pe-2 pb-2 placeholder-wave'>
                    <Link
                        to={`/music/play/${music._id}`}
                        className='nav-link px-3 py-2 bg-danger text-white m-0 d-flex gap-1 rounded-pill align-items-center border small cursor-pointer  play-button'
                    >
                        <BsMusicNoteList className='fs-6' />
                        <span style={{ letterSpacing: "0.8px" }}>Play</span>
                    </Link>
                </div>
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
    );
};

export default MusicCard;