import React, { useState} from 'react';
import '../../styles/collapse.scss';
import iconCollapse from '../../assets/icon_collapse.png';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-wrapper">
            <button onClick={toggle} className="collapse-button">
                {title}
                <img src={iconCollapse} alt="Toggle" className={`icon ${isOpen ? 'open' : ''}`} />
            </button>
            <div className={`content ${isOpen ? 'show' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
