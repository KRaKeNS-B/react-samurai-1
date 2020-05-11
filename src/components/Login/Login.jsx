import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'

const LoginForm = (props) => {
  const maxLength20 = maxLengthCreator(20)

  return <form onSubmit={props.handleSubmit} >
    <div>
      <Field
        placeholder={'Login'}
        name={'login'}
        component={Input}
        validate={[requiredField, maxLength20]}
      />
    </div>
    <div>
      <Field
        placeholder={'Password'}
        name={'password'}
        component={Input}
        validate={[requiredField]}
      />
    </div>
    <div>
      <label>
        <Field
          component={Input}
          name={'rememberMe'}
          type={'checkbox'}
        />
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
