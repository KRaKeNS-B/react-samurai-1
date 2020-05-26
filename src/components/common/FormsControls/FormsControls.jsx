import React from 'react'
import styles from './FormsControls.module.css'

const FormControl = ({input, meta: {touched, error}, element, ...props}) => {
  const hasError = touched && error

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {element(input, props)}
      </div>
      { hasError && <span>{error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  return <FormControl {...props} element={(input, props) => <textarea {...input} {...props} />} />
}

export const Input = (props) => {
  return <FormControl {...props} element={(input, props) => <input {...input} {...props} />} />
}
