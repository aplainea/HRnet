import { Table } from "antd";

const HRNTable = ({ columns, ...propsAntDesign }) => {
    return <Table columns={columns} {...propsAntDesign} />;
};

export default HRNTable;
