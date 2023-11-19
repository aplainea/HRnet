import { Select } from "antd";

const HRNSelect = ({ options, ...propsAntDesign }) => (
    <Select {...propsAntDesign}>
        {options.map((option, index) => (
            <Select.Option
                key={index}
                value={option.value}
                label={option.label}
            >
                {option.label}
            </Select.Option>
        ))}
    </Select>
);

export default HRNSelect;
