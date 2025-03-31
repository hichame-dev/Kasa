import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    )
}

export default Layout


