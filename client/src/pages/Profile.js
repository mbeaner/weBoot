import React, { useEffect, useState } from "react";
import {
  Image,
  Row,
  Col,
  Container,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { FaEdit } from "react-icons/fa/index.esm.js";
import $ from "jquery";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [formSate, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_USER);
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  // const userData = data?.user || {};
  useEffect(() => {
    if (data) {
      console.log("userData", data.user);
      setUserData(data.user);
    }
  }, [data]);
  useEffect(() => {
    if (Auth.loggedIn()) {
      setLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    if (error) {
      console.log("error", error);
    }
  }, [error]);
  useEffect(() => {
    console.log("formState", formSate);
  }, [formSate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("formSate", formSate);
    try {
      const { data } = await updateUser({
        variables: { ...formSate },
      });
      console.log("data", data);
      Auth.login(data.updateUser.token);
    } catch (err) {
      console.error(err);
    }
  };
  const handleInputChange = (event) => {
    const { name, value, defaultValue } = event.target;
    const changed = value !== defaultValue;

    setChanged(changed);
    console.log("name", name, "value", value);
    if (name.includes('password') && changed) setShowPasswordConfirm(true);
    else setShowPasswordConfirm(false);
    setFormState({
      ...formSate,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = $(e.target);
    const type = target.attr("id").split('-')[1] || target.attr('id')
    console.log(type)
    setEditing(!editing)
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Image id='profile-img' src={userData.image} roundedCircle onClick={handleClick} />
          <Form.Control
            id="image-upload"
            type="file"
            placeholder="Photo"
            require=""
            capture
            hidden
          />
          <div id="upload-btns" className="">
            <Button id="img-save" className="profile-btn mx-3 btn-success">
              Save
            </Button>
            <Button id="img-cancel" className="profile-btn mx-3 btn-danger">
              Cancel
            </Button>
          </div>
        </Col>
        <Col xs={8} id="profile-info">
          <Form
            id="profile-form"
            className="align-items-start"
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  defaultValue={userData.firstName}
                  name="firstName"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  defaultValue={userData.lastName}
                  name="lastName"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  defaultValue={userData.email}
                  name="email"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3" hidden={!editing}>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3" hidden={!showPasswordConfirm}>
              <Form.Group as={Col} controlId="formGridPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                />
              </Form.Group>
            </Row>
            <Button
              className="me-3"
              variant="success"
              type="submit"
              hidden={!changed}
              disabled={!changed}
            >
              Submit
            </Button>
            <Button
              variant="danger"
              type="reset"
              disabled={!changed}
              hidden={!changed}
            >
              Cancel
            </Button>
          </Form>
        </Col>
        <Col id='col-icon' hidden={!loggedIn} onClick={handleClick}>
          <FaEdit id="edit-icon" />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
