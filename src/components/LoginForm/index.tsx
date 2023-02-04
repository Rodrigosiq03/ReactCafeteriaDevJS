import React from 'react'
import { Form, Input, Label, Button } from "../../styledComponents/Form";

export default function LoginForm({ submitFunction, onChange }: { submitFunction: any, onChange: any }) 
  {
    return (
      <Form onSubmit={submitFunction}>
          <Label >Username</Label>
          <Input name='username' onChange={onChange} />
          <Label htmlFor='password'>Password</Label>
          <Input name='password' type={'password'} onChange={onChange} />
          <Button style={{marginTop: '20px'}} type='submit' >Login</Button>
      </Form>
    )
}