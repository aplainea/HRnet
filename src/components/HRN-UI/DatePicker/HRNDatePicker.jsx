import { DatePicker } from "antd";
import dayjs from "dayjs";

const HRNDatePicker = ({ format = "DD/MM/YYYY", ...propsAntDesign }) => (
    <DatePicker
        {...propsAntDesign}
        format={format}
        value={propsAntDesign.value && dayjs(propsAntDesign.value)}
        onChange={(value) =>
            propsAntDesign.onChange &&
            propsAntDesign.onChange(value && dayjs(value))
        }
    />
);

export default HRNDatePicker;
