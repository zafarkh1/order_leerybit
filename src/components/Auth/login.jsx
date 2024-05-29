import React from 'react';
import { Button, Form, Input, Link, Row } from "@iqueue/ui-kit";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const handleSignIn = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth">
        <h4>Login</h4>
        <Form
          allowResubmit
          onSubmit={data => {
          handleSignIn(data)
        }}
        >
          <Row>
            <Input
              type="email"
              placeholder="Email address"
              name="email"
              size={ 12 }
            />
          </Row>

          <Row>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              size={ 12 }
            />
          </Row>

          <Row justify={'center'}>
              <Button
                title={'Submit'}
                type="submit"
                primary={true}
                size={ 8 }
              />
          </Row>
        </Form>
        <Link href={'/'}>Create one!</Link>
      </div>
    </div>
  );
}

export default Login;