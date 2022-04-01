import React from "react";

const NavBar = () => {
    return (
        
        <nav className = "navbar">
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "./posts">Blog Posts</Link>
                <Link></Link>
                <Link></Link>
            </div>
        </nav>
        
    );
}

export default NavBar