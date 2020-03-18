import React, { useState } from "react";
import {
  Menu,
  Button,
  Image,
  Modal,
  Header,
  Icon,
  Form,
  Checkbox
} from "semantic-ui-react";

import Carousel from "./Carousel";

const options = [
  { key: "0", text: "Casa Central", value: "casacentral" },
  { key: "1", text: "Ramallo", value: "ramallo" },
  { key: "2", text: "El Paraíso", value: "paraiso" },
  { key: "3", text: "Salto", value: "salto" },
  { key: "4", text: "Santa Lucía", value: "santalucia" },
  { key: "5", text: "Perez Millán", value: "perez" }
];

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Menu attached="top">
        <Menu.Item name="logo" link={true}>
          <Image style={{ height: 80 }} src="/images/logo.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item link={true} name="inicio" style={{ color: "red" }}>
            Inicio
          </Menu.Item>
          <Menu.Item link={true} name="institucional" style={{ color: "red" }}>
            Institucional
          </Menu.Item>
          <Menu.Item link={true} name="sucursales" style={{ color: "red" }}>
            Sucursales
          </Menu.Item>
          <Menu.Item link={true} name="servicios" style={{ color: "red" }}>
            Servicios
          </Menu.Item>
          <Menu.Item
            link={true}
            name="nuestrasofertas"
            style={{ color: "red" }}
          >
            Nuestras Ofertas
          </Menu.Item>
          <Menu.Item link={true} name="facebook" style={{ color: "red" }}>
            Facebook
          </Menu.Item>
          <Menu.Item link={true} name="contacto" style={{ color: "red" }}>
            Contacto
          </Menu.Item>
          <Menu.Item
            onClick={() => setModalVisible(true)}
            link={true}
            name="ingresar"
            style={{ color: "red" }}
          >
            Ingresar
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Carousel />
      <Modal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        size="small"
      >
        <Header content="Iniciar Sesion" />
        <Modal.Content>
          <Form>
            <Form.Field>
              <Form.Select
                fluid
                label="Sucursal"
                options={options}
                placeholder="Sucursal"
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Contraseña</label>
              <input placeholder="Contraseña" type="password" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setModalVisible(false)}>
            <Icon name="checkmark" /> Ingresar
          </Button>
        </Modal.Actions>
      </Modal>
      <h1>Tu mama</h1>
      <Button>Click Here</Button>
    </div>
  );
}

export default App;
