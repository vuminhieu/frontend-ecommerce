import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function defaultLayout({children}) {
    return <div>
        <Header />
        <div className="container">
            <Sidebar />
            <div className="content">
                {children}
            </div>

        </div>
        <Footer />
    </div>;
}

export default defaultLayout;