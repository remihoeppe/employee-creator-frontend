import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import NavBar from "./components/NavBar/NavBar";
import EmployeeCreate from "./components/EmployeeCreate/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate/EmployeeUpdate";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<h1>Employee Creator</h1>} />
                    <Route path="/employees" element={<EmployeesList />} />
                    <Route
                        path="/employees/newEmployee"
                        element={<EmployeeCreate />}
                    />
                    <Route path="/employees/:id" element={<EmployeeUpdate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
