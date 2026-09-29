import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// BrowserRouter keeps the old scroll position between pages; reset it on navigation
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
