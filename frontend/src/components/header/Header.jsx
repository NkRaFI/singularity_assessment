import { RiSearchLine } from "react-icons/ri";
import { LuListMusic } from "react-icons/lu";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom"

const Header = () => {
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
                    <div className="col-12 col-md-8 col-lg-6">
                        <Dropdown
                            firstElement={
                                <div className="position-relative"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr auto"
                                    }}
                                >
                                    <input
                                        type="search"
                                        className="form-control py-3 px-4 border-0 border-start border-top border-bottom border-danger-subtle rounded-start-pill focus-ring focus-ring-danger"

                                        placeholder="Search by title"
                                    />
                                    <button
                                        className="btn h-100 rounded-end-pill border-0 border-top border-end border-bottom border-danger-subtle rounded-0 pe-3 pb-2"
                                    >
                                        <RiSearchLine className="fs-3 text-danger" />
                                    </button>
                                </div>
                            }
                            showDropdown={false}
                        >
                            <p>Hello</p>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;