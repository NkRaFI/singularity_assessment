import { RiSearchLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className="border-bottom p-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 d-flex align-items-center">
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
                </div>
            </div>
        </div>
    );
};

export default Header;