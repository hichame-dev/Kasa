import { useState } from 'react';
import chevron from '../assets/chevron.svg';
import '../styles/Collapse.scss';

function Collapse({ title, children, className = '' }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${className}`}>
            <button className="collapse__toggle" onClick={toggleCollapse}>
                {title}
                <span className={`collapse__arrow ${isOpen ? 'open' : ''}`}>
                    <img src={chevron} alt="Chevron" />
                </span>
            </button>

            {isOpen && (
                <div className="collapse__content">
                    <div className="collapse__inner">{children}</div>
                </div>
            )}
        </div>
    );
}

export default Collapse;
