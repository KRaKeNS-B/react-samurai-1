import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit} >
    <div>
      <Field placeholder={'Login'} name={'login'} component={'input'} />
    </div>
    <div>
      <Field placeholder={'Password'} name={'password'} component={'input'} />
    </div>
    <div>
      <label>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
        remember me
      </label>
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {

  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login
