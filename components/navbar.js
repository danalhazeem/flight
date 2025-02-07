import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Navbar() {
//     const items = ['flights', 'bookings']; // Static items, no authentication logic

//     return (
//         <nav 
//             className="d-flex justify-content-center justify-content-sm-end"
//             style={{
//                 backgroundImage: 'url("https://i.pinimg.com/736x/78/57/c1/7857c1a3382844ff08d44b1dc4c52926.jpg")',
//                 backgroundSize: 'contain', 
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 height: '60px',
//             }}
//         >
//             <ul className="d-flex list-unstyled align-items-center m-3">
//                 {items.map((item) => <Navlink key={item} item={item} />)}
//             </ul>
//         </nav>
//     );
// }

// function Navlink({ item }) {
//     return (
//         // <li className="me-3">
//         //     <Link href={item === 'flights' ? '/' : `/${item}`} className="link-light text-decoration-none">
//         //         {capitalize(item)}
//         //     </Link>
//         // </li>
//     // );
// }

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.substring(1);
// }
