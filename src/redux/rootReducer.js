import { combineReducers } from "redux";
import EmployeesReducer from "./Employees/EmployeesReducer";

const rootReducer = combineReducers({
    employees: EmployeesReducer,
});

export default rootReducer;
