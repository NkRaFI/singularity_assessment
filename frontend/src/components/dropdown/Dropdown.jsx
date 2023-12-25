import { useEffect, useRef } from 'react';

const Dropdown = ({
    firstElement = () => "",
    showDropdown = false,
    setShowDropdown = () => console.log("setter func"),
    children
}) => {

    const dropdownBody = useRef()
    useEffect(() => {
        const windowClickHandler = () => {
            setShowDropdown(false)
        }
        window.addEventListener('click', windowClickHandler);

        return () => {
            window.removeEventListener('click', windowClickHandler)
        }
    })

    return (
        <div className='position-relative' ref={dropdownBody}>
            {
                firstElement
            }
            {
                showDropdown &&
                <div
                    className="position-absolute w-100 bg-white rounded border p-1 shadow"
                    style={{ top: "102%", left: "0px", zIndex: "999" }}
                >
                    {children}
                </div>
            }

        </div>
    );
};

export default Dropdown;