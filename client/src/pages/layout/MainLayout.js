import Cookies from 'js-cookie'
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function MainLayout({children}) {
    const token = Cookies.get('token');
    console.log(token)
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}