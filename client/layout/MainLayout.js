import Footer from "./footer";
import Header from "./header";

export default function MainLayout({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}