import {
  Space,
  Container,
  Tag,
  Drawer,
  Row,
  Col,
  Form,
  Button,
  Input,
  Select
} from "antd";
import Card from "antd/lib/card/Card";

export default function Content(data) {
  if (data) {
    console.log(data);
  }

  let ifs = Object.keys(data.data.interfaces);
  console.log(ifs);

  let Cols = ifs.map((i, k) => (
    <Col span={6} key={i}>
      {i}
    </Col>
  ));

  return (
    <>
      <Card title={"Interfaces"}>
        <Row>{Cols}</Row>
      </Card>
      <Row gutter={16}>
        {Cols}
        <Col span={4}>Content</Col>
        <Col span={4}>Content</Col>
      </Row>
      <Form></Form>
    </>
  );
}
