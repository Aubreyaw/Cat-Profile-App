import { Routes, Route } from "react-router-dom"; 
import GroomingServices from "./pages/GroomingServices";
import Appointments from "./pages/Appointments";
import PetClients from "./pages/PetClients";

function RoutesComponent({ services, appointments, pets }) {
    return (
        <Routes>
            <Route path="/" element={<GroomingServices services={services}/>} />
            <Route path="/appointments" element={<Appointments appointments={appointments}/>} />
            <Route path="/pets" element={<PetClients pets={pets}/>} />
        </Routes>
    );
}

export default RoutesComponent;