const initialState = {
    employees: [],
};

const EmployeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EMPLOYEES_FETCHED":
            return {
                ...state,
                employees: action.payload.employees,
            };
        default:
            return state;
    }
};

export default EmployeesReducer;
