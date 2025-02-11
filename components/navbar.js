import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const items = ['home', 'flights', 'bookings'];
//i
    return (
        <nav style={navStyle}>
            <div style={logoContainerStyle}>
                {/* Optionally, you can add your logo here */}
                {/* <img
                    src="https://i.pinimg.com/474x/51/d1/09/51d1095662eb38883f0e01a006f34692.jpg"
                    alt="Logo"
                    style={logoImageStyle}
                /> */}
            </div>
            <ul style={ulStyle}>
                {items.map((item) => (
                    <Navlink key={item} item={item} />
                ))}
            </ul>
        </nav>
    );
}

function Navlink({ item }) {
    // Adjust 'home' to go to the index page
    const href = item === 'home' ? '/' : `/${item}`;

    return (
        <li style={{ margin: '0 15px' }}>
            <Link href={href} style={navLinkStyle}>
                {capitalize(item)}
            </Link>
        </li>
    );
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

// Styles for Navbar
const navStyle = {
    position: 'fixed', // Keep navbar fixed at the top-left
    top: '10px', // Small gap from the top
    left: '10px', // Small gap from the left
    width: 'auto', // Adjust width based on content
    padding: '10px 20px',
    backgroundColor: 'transparent', // Transparent background
    zIndex: 1000, // Keep navbar on top
    display: 'flex', // Align logo and links in a row
    alignItems: 'center', // Center the content vertically
};

const logoContainerStyle = {
    marginRight: '20px', // Space between logo and links
};

const logoImageStyle = {
    height: '50px', // Logo height
    width: 'auto', // Maintain aspect ratio
    objectFit: 'contain',
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    margin: '0',
    padding: '0',
};

const navLinkStyle = {
    fontSize: '1.4rem', // Bigger text
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none', // No underline by default
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '5px', // Space for the underline
    transition: 'color 0.3s', // Smooth transition for hover
};

navLinkStyle[':hover'] = {
    color: '#72A0C1', // Color change on hover (if you want)
};
