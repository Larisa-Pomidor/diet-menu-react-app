import React, { useState, useRef, useEffect } from "react";
import './Dropdown.css'

const Dropdown = ({ defaultLabel, options, selectedOption, handleDropdownSelect }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='dropdown' ref={dropdownRef}>
            <button type='button'
                className={`dropdown__button ${isOpen ? 'dropdown__button_active' : ''}`}
                onClick={toggleDropdown}
            >
                {!selectedOption ? defaultLabel : options.find(option => option.id === selectedOption).name}
            </button>

            {isOpen && (
                <div className="dropdown__list">
                    {options.map((option, index) => (
                        <DropdownItem key={index} option={option}
                            handleDropdownSelect={handleDropdownSelect} />
                    ))}
                </div>
            )}
        </div>
    );
};

const DropdownItem = ({ option, handleDropdownSelect }) => {
    return (
        <div className='dropdown-item'
            onClick={() => {
                handleDropdownSelect(option.id);
            }}>
            <div className="dropdown-item__value" >
                {option.name}
            </div>
        </div>
    )
}

export default Dropdown;