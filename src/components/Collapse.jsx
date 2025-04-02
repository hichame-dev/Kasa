import { useState, useRef } from 'react';
import '../styles/Collapse.scss';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef();

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse__header" onClick={toggleCollapse}>
                {title}
                <span className={`collapse__arrow ${isOpen ? 'open' : ''}`}>⌄</span>
            </button>

            <div
                ref={contentRef}
                className="collapse__content"
                style={{ height: isOpen ? contentRef.current.scrollHeight : 0 }}
            >
                <div className="collapse__inner">{children}</div>
            </div>
        </div>
    );
}

export default Collapse;
