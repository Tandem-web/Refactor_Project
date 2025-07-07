import { createPortal } from "react-dom";
import { FaChevronUp } from "react-icons/fa6";
import "./styles/scroll-to-top-button.scss"
import { useEffect, useState } from "react";

const SrollToTopButton: React.FC = ():React.ReactPortal => {
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return createPortal(
        <>
            {isVisible && (
                <div className="scroll-to-top-btn-wrapper" onClick={scrollToTop}>
                    <div className="scroll-to-top-btn">
                        <FaChevronUp className="scroll-to-top-btn-icons"/>
                    </div>
                </div>
            )}
        </>,
        document.getElementById('scroll-top-root')
    );
}

export default SrollToTopButton;