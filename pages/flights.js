import Navbar from '../components/navbar'; // Adjust the path if needed
import Flights from '../components/flights';

export default function FlightsPage() {
    return (
        <div>
            {/* Add the Navbar here */}
            <Navbar />
            
            {/* Render the Flights component */}
            <Flights />
        </div>
    );
}
