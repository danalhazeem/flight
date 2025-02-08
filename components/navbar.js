import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const items = ['flights', 'bookings'];

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                {items.map((item) => (
                    <Navlink key={item} item={item} />
                ))}
            </ul>
        </nav>
    );
}

function Navlink({ item }) {
    return (
        <li style={{ marginRight: '20px' }}>
            <Link href={`/${item}`} style={navLinkStyle}>
                {capitalize(item)}
                <span style={underlineStyle}></span>
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
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    margin: '0',
    padding: '0'
};

const navLinkStyle = {
    fontSize: '1.4rem', // Bigger text
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '5px' // Space for the underline
};

const underlineStyle = {
    display: 'block',
    height: '2px',
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: '-2px',
    left: '0'
};


