
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Sales from './Sales';
import Salons from './Salons';
import Clients from './Clients';
import Catalog from './Catalogs';
import Calendar from './Calendar';
import Bookings from './Bookings';
import Teams from './Teams';
import Services from './Services';
import Settings from './Settings';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/salon/:id" element={<SalonDetail />} /> */}
            <Route path="/clients" element={<Clients />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
    </Router>
  );
}

export default App;