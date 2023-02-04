import React from 'react';
import { Button, Form, Input, Label } from '../../styledComponents/Form';

export default function SignUpForm ({ SignUp, onChange }: { SignUp: any, onChange: any }) {
    return (
      <Form onSubmit={SignUp}>
          <Label >Username</Label>
          <Input name='username' onChange={onChange} />
          <Label htmlFor='email'>Email</Label>
          <Input type={'email'} name='email' onChange={onChange} />
          <Label htmlFor='password'>Password</Label>
          <Input type={'password'} name='password' onChange={onChange} />
          <Label htmlFor='password'>Confirm Password</Label>
          <Input type={'password'} name='confirmpassword' onChange={onChange} />
          <Button type='submit' >Sign Up</Button>
      </Form>
    )
}