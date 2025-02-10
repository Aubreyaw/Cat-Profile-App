import { Routes, Route } from "react-router-dom"; 
import GroomingServices from "./pages/GroomingServices";
import Appointments from "./pages/Appointments";
import PetClients from "./pages/PetClients";

function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<GroomingServices />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/pets" element={<PetClients />} />
        </Routes>
    );
}

export default RoutesComponent;