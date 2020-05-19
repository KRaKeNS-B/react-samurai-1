import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import styles from '../common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {

  return <form onSubmit={props.handleSubmit} >
    <div>
      <Field
        placeholder={'Email'}
        name={'email'}
        component={Input}
        validate={[requiredField, maxLength20]}
      />
    </div>
    <div>
      <Field
        placeholder={'Password'}
        name={'password'}
        type={'password'}
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
    {
      props.error && <div className={styles.formSummaryError}>{props.error}</div>
    }
    <div>
      <button>Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = (props) => {
  const onSubmit = ({email, password, rememberMe}) => {
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login}) (Login)
