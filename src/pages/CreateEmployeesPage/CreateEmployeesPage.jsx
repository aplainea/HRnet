import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { Form } from "antd";
import { addEmployee } from "../../redux/Employees/EmployeesActions";
import department from "../../data/department";
import state from "../../data/state";
import HRNButton from "../../components/HRN-UI/Button/HRNButton";
import HRNSelect from "../../components/HRN-UI/Select/HRNSelect";
import HRNInput from "../../components/HRN-UI/Input/HRNInput";
import HRNDatePicker from "../../components/HRN-UI/DatePicker/HRNDatePicker";
import HRNModal from "../../components/HRN-UI/Modal/HRNModal";

const SubmitButton = ({ form, openModal }) => {
    const [submittable, setSubmittable] = useState(false);
    const dispatch = useDispatch();

    const values = Form.useWatch([], form);
    useEffect(() => {
        form.validateFields({
            validateOnly: true,
        }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            }
        );
    }, [form, values]);

    const handleSubmit = async () => {
        try {
            await form.validateFields();
            const startDateValue = form.getFieldValue("start-date");
            const dobValue = form.getFieldValue("date-of-birth");
            const formData = {
                ...form.getFieldsValue(),
                id: uuidv4(),
                "start-date": startDateValue
                    ? dayjs(startDateValue).format("DD/MM/YYYY")
                    : undefined,
                "date-of-birth": dobValue
                    ? dayjs(dobValue).format("DD/MM/YYYY")
                    : undefined,
            };
            dispatch(addEmployee(formData));
            openModal();
        } catch (errorInfo) {
            console.log("Failed:", errorInfo);
        }
    };

    return (
        <HRNButton
            type="primary"
            htmlType="submit"
            disabled={!submittable}
            onClick={handleSubmit}
        >
            Submit
        </HRNButton>
    );
};

const ResetButton = ({ form }) => {
    const handleReset = () => {
        form.resetFields();
    };

    return (
        <HRNButton danger onClick={handleReset}>
            Reset
        </HRNButton>
    );
};

const AutocompleteButton = ({ form }) => {
    const handleAutocomplete = () => {
        const autocompleteValues = {
            "first-name": "John",
            "last-name": "Doe",
            "date-of-birth": "1990-01-01",
            "start-date": "2023-01-01",
            street: "123 Main St",
            city: "Fairbanks",
            state: "Alaska",
            "zip-code": "99701",
            department: "Engineering",
        };
        form.setFieldsValue(autocompleteValues);
    };

    return (
        <HRNButton type="text" onClick={handleAutocomplete}>
            Autocomplete form
        </HRNButton>
    );
};

export default function CreateEmployeesPage() {
    const [form] = Form.useForm();
    const firstNameInputRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        form.resetFields();
        setModalVisible(false);
    };

    useEffect(() => {
        if (firstNameInputRef.current) {
            firstNameInputRef.current.focus();
        }
    }, []);

    return (
        <div className="createemployeespage">
            <div className="container">
                <div className="title-container">
                    <h2>Create Employee</h2>
                    <Link to="/current-employees">
                        <HRNButton>Current Employees</HRNButton>
                    </Link>
                </div>

                <Form
                    form={form}
                    name="create-employee"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="First Name"
                        name="first-name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the first name!",
                            },
                        ]}
                    >
                        <HRNInput
                            ref={firstNameInputRef}
                            placeholder="Ex. John"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="last-name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the last name!",
                            },
                        ]}
                    >
                        <HRNInput placeholder="Ex. Doe" />
                    </Form.Item>

                    <Form.Item
                        label="Date of Birth"
                        name="date-of-birth"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the date of birth!",
                            },
                        ]}
                    >
                        <HRNDatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Start Date"
                        name="start-date"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the start date!",
                            },
                        ]}
                    >
                        <HRNDatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Street"
                        name="street"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the street!",
                            },
                        ]}
                    >
                        <HRNInput placeholder="Ex. 123 Main St" />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the city!",
                            },
                        ]}
                    >
                        <HRNInput placeholder="Ex. Fairbanks" />
                    </Form.Item>

                    <Form.Item
                        label="State"
                        name="state"
                        rules={[
                            {
                                required: true,
                                message: "Please select the state!",
                            },
                        ]}
                    >
                        <HRNSelect
                            placeholder="Ex. Alaska"
                            options={state.map((state) => ({
                                value: state.abbreviation,
                                label: state.name,
                            }))}
                            showSearch
                        />
                    </Form.Item>

                    <Form.Item
                        label="Zip Code"
                        name="zip-code"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the zip code!",
                            },
                        ]}
                    >
                        <HRNInput type="number" placeholder="Ex. 99701" />
                    </Form.Item>

                    <Form.Item
                        label="Department"
                        name="department"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the department!",
                            },
                        ]}
                    >
                        <HRNSelect
                            placeholder="Ex. Engineering"
                            options={department.map((value) => ({
                                value,
                                label: value,
                            }))}
                            showSearch
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="container-actions-form">
                            <SubmitButton form={form} openModal={openModal} />
                            <ResetButton form={form} />
                            <AutocompleteButton form={form} />
                        </div>
                    </Form.Item>
                </Form>
                <HRNModal
                    show={modalVisible}
                    close={closeModal}
                    title="Submission Successful"
                    mainContent={<p>Employee Created!</p>}
                    footerContent={
                        <div className="modal-footer-actions">
                            <HRNButton
                                type="primary"
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                Create New Employee
                            </HRNButton>
                            <Link to="/current-employees">
                                <HRNButton>Current Employees</HRNButton>
                            </Link>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
