import "tailwindcss/tailwind.css";
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AfterAuthQuestions from "./after-auth/steps";
import AfterAuthQuestions1 from "./after-auth/steps-1";
import AfterAuthQuestions2 from "./after-auth/steps-2";
import Dashboard from "./dashboard/home";
import MainLayout from "./components/layouts/main";
import HomeWelcome from "./welcome/home";
import MSGhome from "./dashboard/msg/home";
import ReceptionHospital from "./dashboard/reception/home";


export default function App() {
  return (
    <Router>
      <Routes>      
        <Route path="/" element={<HomeWelcome />} /> 
        <Route path="/after-auth/steps" element={<AfterAuthQuestions />} />
        <Route path="/after-auth/steps-1" element={<AfterAuthQuestions1 />} />
        <Route path="/after-auth/steps-2" element={<AfterAuthQuestions2 />} />
        <Route path="/dashboard" element={<MainLayout />} >
            <Route index path="/dashboard" element={<Dashboard/>} />
            <Route path="msg" element={<MSGhome/>} />
            <Route path="reception" element={<ReceptionHospital/>}>

            </Route>
        </Route>
      </Routes>
    </Router>
  );
}
