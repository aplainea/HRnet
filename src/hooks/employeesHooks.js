import { useSelector } from "react-redux";

export function useEmployees() {
    return useSelector((state) => state.auth.employees);
}
