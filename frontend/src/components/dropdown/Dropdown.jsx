import { useEffect, useRef } from 'react';

const Dropdown = ({
    firstElement = () => "",
    showDropdown = false,
    setShowDropdown = () => console.log("setter func"),
    children
}) => {

    const dropdownBody = useRef()
    useEffect(() => {
        const windowClickHandler = (e) => {
            if (!dropdownBody?.current?.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        const windowKeydownHandler = (e) => {
            if (e.key === "Escape" && !dropdownBody?.current?.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        window.addEventListener('click', windowClickHandler);
        window.addEventListener('keydown', windowKeydownHandler);

        return () => {
            window.removeEventListener('click', windowClickHandler)
            window.removeEventListener('keydown', windowKeydownHandler)
        }
    })

    return (
        <div className='position-relative' ref={dropdownBody}>
            {
                firstElement
            }
            <div
                className="position-absolute"
                style={{ top: "100%", left: "0px" }}
            >
                {
                    showDropdown && children
                }
            </div>
        </div>
    );
};

export default Dropdown;