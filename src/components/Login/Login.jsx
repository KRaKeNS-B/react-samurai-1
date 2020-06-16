import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import styles from '../common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return <form onSubmit={handleSubmit} >
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

    { captchaUrl && <img src="captchaUrl" alt=""/> }
    { captchaUrl && <Field
        placeholder={'Symbols from image'}
        name={'captcha'}
        component={Input}
        validate={[requiredField]}
      />
    }

    {
      error && <div className={styles.formSummaryError}>{error}</div>
    }
    <div>
      <button>Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
  const onSubmit = ({email, password, rememberMe, captcha}) => {
    login(email, password, rememberMe, captcha)
  }

  if (isAuth) {
    return <Redirect to='/profile' />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  }
}

export default connect(mapStateToProps, {login}) (Login)
