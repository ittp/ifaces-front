// import "./styles.css";

// import { Header } from "antd/lib/layout/layout";
import {
  Space,
  Container,
  Tag,
  PageHeader,
  Drawer,
  Row,
  Col,
  Form,
  Button,
  Input,
  Select,
} from "antd";

// const sDV = (
//   <Drawer size={"200px"} visible={"true"}>
//     <Row layout={"horizontal"}>
//       <Col>В очереди 5 человек</Col>
//     </Row>
//     <Row>
//       <Col>15:00</Col>
//     </Row>
//     <Row layout={"horizontal"}>
//       <Col>Иванов Иван Иванович</Col>
//     </Row>
//     <Row layout={"horizontal"}>
//       <Col>Иванов Иван Иванович</Col>
//     </Row>
//     <Row layout={"horizontal"}>
//       <Col>Иванов Иван Иванович</Col>
//     </Row>
//     <Row layout={"horizontal"}>
//       <Col>Иванов Иван Иванович</Col>
//     </Row>
//     <Row layout={"horizontal"}>
//       <Col>Иванов Иван Иванович</Col>
//     </Row>
//   </Drawer>
// );

let brands = ["VZ", "KS", "LB", "FC", "PO"];

export default function App(users) {
  console.log(users);
  return (
    <div className="App">
      <PageHeader title={<Row>Logo</Row>} extra={"@Username"} />
      <div></div>
      <h2>Авторизация</h2>
      <Space>
        <Row>
          <Form id="authWeb">
            <Form.Item>
              <Input placeholder="Имя пользователя" />
            </Form.Item>
            <Form.Item>
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Домен" />
            </Form.Item>

            <Button type="submit">Далее</Button>
          </Form>
        </Row>
      </Space>
    </div>
  );
}
