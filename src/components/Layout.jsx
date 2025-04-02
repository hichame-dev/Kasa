import Header from './Header'


function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            
        </>
    )
}

export default Layout


