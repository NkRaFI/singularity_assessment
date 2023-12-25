
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className="border-bottom p-2">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 d-flex align-items-center">
                        <input
                            type="search"
                            className="form-control py-3 px-4 border-0 border-start border-top border-bottom border-danger-subtle rounded-start-pill"
                            
                            placeholder="Search by title"
                        />
                        <button
                            className="btn h-100 rounded-end-pill border-0 border-top border-end border-bottom border-danger-subtle rounded-0 px-3"
                        >
                            <CiSearch className="fs-5 p-3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;