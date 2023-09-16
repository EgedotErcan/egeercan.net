import "./Navbar.css"

const Navbar = () => {
    
    return (
        <>
            <div className='bar_card button_disabled' role='button'>
                about
            </div>
            <div className="bar_card button_disabled" role='button'>
                learning
            </div>
            <div className="bar_card button_disabled" role='button'  >
                blog
            </div>          
        </>
    );
};

export default Navbar;



/*

        <div id="dock-container">
                <ul>
                    <li>
                        <span>about</span>
                            <Link to='/about'><img src=" https://cdn-icons-png.flaticon.com/512/8197/8197485.png" />
                            </Link>
                    </li>
                    <li>
                        <span>learning</span>
                            <Link to='/learning'><img src="https://cdn-icons-png.flaticon.com/512/11321/11321317.png" />
                            </Link>
                    </li>
                    <li>
                        <span>blogs</span>
                            <Link to='/blogs'><img src="https://cdn-icons-png.flaticon.com/512/11321/11321317.png" />
                            </Link>
                    </li>
                </ul>
        </div>
*/