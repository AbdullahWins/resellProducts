import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "react-bootstrap/ToggleButton";

const Register = () => {
  const { setDbUser, createNewUserEmail, updateUser } = useContext(AuthContext);

  document.title = "GameCheap | Register";

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const errorToast = () => toast(`${error}`);
  const successToast = () => toast(`'Account Created!'`);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const isSeller = checked;
    const isAdmin = false;

    const newUser = {
      name,
      photoURL,
      email,
      password,
      isSeller,
      isAdmin,
    };

    const addUserToDB = () => {
      fetch("https://gamecheap-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then((res) => {
        res.json();
        setDbUser(newUser);
        successToast();
      });
    };

    createNewUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdate(name, photoURL);
        addUserToDB();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        errorToast();
      });
  };

  const handleUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile)
      .then(() => {})
      .catch(() => {});
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="py-6">
      <h2 className="fs-2 text-center mb-6">REGISTER</h2>
      <Form onSubmit={handleSubmit} className="w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profile Picture Link</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="image url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="email" />
          <Form.Text className="text-muted">
            We'll share your email with everyone!
          </Form.Text>
        </Form.Group>

        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Become a Seller
        </ToggleButton>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              label="Agree to our TOS?"
            />
          </Form.Group>
          <Button
            disabled={!accepted}
            variant="primary"
            className="w-50"
            type="submit"
          >
            Submit
          </Button>
          <div className="d-flex flex-column align-items-center justify-content-center mt-4">
            <p>Already have an account?</p>
            <Link to="/login">
              <Button className="m-3">Log In</Button>
            </Link>
          </div>
          <ToastContainer />
        </div>
      </Form>
    </div>
  );
};

export default Register;
