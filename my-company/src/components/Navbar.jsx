import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: '#f5f5f5',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}
        >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;
