export const fetchEmployees = (employees) => {
    return (dispatch) => {
        dispatch({ type: "EMPLOYEES_FETCHED", payload: { employees } });
    };
};
