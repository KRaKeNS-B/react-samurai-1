import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import styles from './ProfileInfo.module.css'
import stylesFormsControls from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, initialValues, error}) => {
  return <form onSubmit={handleSubmit} >
    <div>
      <button>Save</button>
    </div>
    {
      error && <div className={stylesFormsControls.formSummaryError}>{error}</div>
    }
    <div>
      <b>Full name</b>: <Field
        placeholder='Full name'
        name='fullName'
        component={Input}
      />
    </div>
    <div>
      <b>Looking for a job</b>: <Field
        name='lookingForAJob'
        component={Input}
        type='checkbox'
      />
    </div>
    <div>
      <b>My professional skills</b>: <Field
        placeholder='My professional skills'
        name='lookingForAJobDescription'
        component={Textarea}
      />
    </div>
    <div>
      <b>About me</b>: <Field
        placeholder="About me"
        name='aboutMe'
        component={Textarea}
      />
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(initialValues.contacts).map(key => {
        return <div key={key} className={styles.contact}>
          <b>{key}</b>: <Field
            placeholder={key}
            name={`contacts.${key}`}
            component={Input}
          />
        </div>
      })}
    </div>
  </form>
}

export default reduxForm({
  form: 'dialogProfileDataForm'
}) (ProfileDataForm)
