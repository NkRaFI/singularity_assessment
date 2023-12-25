import "./Header.css"
import { RiSearchLine } from "react-icons/ri";
import { LuListMusic } from "react-icons/lu";
import Dropdown from "../dropdown/Dropdown";
import { Link, useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { useSearchMusicMutation } from "../../features/music/musicSlice";
import { useEffect, useState } from "react";

const Header = () => {
    /**-React Router-**/
    const setSearchParams = useSearchParams()[1]
    
    /**-React Hooks-**/
    const [showDropdown, setShowDropdown] = useState(false)

    /**-RTK-**/
    //mutations
    const [searchMusic, { data: musics }] = useSearchMusicMutation()

    /**-Hook Form-**/
    const { register, handleSubmit, watch } = useForm()
    const searchTerm = watch("query") || ""

    /**-useEffects-**/
    useEffect(() => {
        let timer
        if (searchTerm.length) {
            timer = setTimeout(() => {
                searchMusic({ query: searchTerm })
                    .then(({ data: musics }) => {
                        if (musics.data.length) {
                            setShowDropdown(true)
                        }
                    })
                    .catch(error => console.log(error))
            }, 1000)
        }

        return () => clearTimeout(timer)

    }, [searchTerm, searchMusic])

    /**-Event Handlers-**/
    const handleSearchInputSubmit = async (data) => {
        setSearchParams(data)
    }

    return (
        <div className="border-bottom p-2">
            <div className="container">
                <div className="row">
                    <div className="col-2 col-lg-3 d-flex align-items-center">
                        <Link to="/">
                            <LuListMusic
                                className="display-6 text-danger"
                            />
                        </Link>
                    </div>
                    <div className="col-10 col-md-8 col-lg-6">
                        <Dropdown
                            firstElement={
                                <form
                                    onSubmit={handleSubmit(handleSearchInputSubmit)}
                                    className="position-relative"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr auto"
                                    }}
                                >
                                    <input
                                        type="search"
                                        {...register("query", { required: true })}
                                        className="form-control py-2 px-3 py-md-3 px-md-4 border-0 border-start border-top border-bottom border-danger-subtle rounded-start-pill focus-ring focus-ring-danger"
                                        placeholder="Search by title i.e: Shubhaarambh"
                                        style={{"--bs-focus-ring-color": "transparent"}}
                                    />
                                    <button
                                        className="btn h-100 rounded-end-pill border-0 border-top border-end border-bottom border-danger-subtle rounded-0 pe-3 pb-2"
                                    >
                                        <RiSearchLine className="fs-5 fs-md-3 text-danger" />
                                    </button>
                                </form>
                            }
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                        >
                            <div className="search-result-card p-2">
                                {
                                    musics?.data?.map(music => (
                                        <Link
                                            key={music._id}
                                            to={`/music/play/${music._id}`}
                                            className="nav-link rounded cursor-pointer d-flex gap-2"
                                        >
                                            <img
                                                src={music.cover_image}
                                                alt=""
                                                className="rounded"
                                                style={{
                                                    width: "30px",
                                                }}
                                            />
                                            <p className="m-0">{music.title}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;