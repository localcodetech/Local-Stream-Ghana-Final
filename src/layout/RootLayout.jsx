import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";


const RootLayout =()=>{
    return (<>
    <ScrollToTop />
    <Navbar />

<main>
        <Outlet />
</main>


<Footer />

    
    </>

    )
};

export default  RootLayout