import React from 'react';
import { Button, Form, Input, Link, Row } from "@iqueue/ui-kit";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {

  const handleSignUp = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert('User signed up successfully');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth">
        <h4>Sign Up</h4>
        <Form
          allowResubmit
          onSubmit={data => {
            console.log('DDD', data)
            // handleSignUp(data)
          }}
        >
          <Row>
            <Input
              type="email"
              placeholder="Email address"
              size={ 12 }
              name="email"
            />
          </Row>

          <Row>
            <Input
              type="text"
              placeholder="Username"
              name="username"
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

          <Row justify={ 'center' }>
            <Button
              title={'Submit'}
              type="submit"
              size={ 8 }
              primary={ true }
            />
          </Row>
        </Form>

        <Link href={ '/login' }>Already hava an account?</Link>
      </div>
    </div>
  );
}

export default SignUp;