import { forwardRef } from "react";
import { Input } from "antd";

const HRNInput = forwardRef((propsAntDesign, ref) => (
    <Input ref={ref} {...propsAntDesign} />
));

export default HRNInput;
