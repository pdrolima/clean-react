import React from 'react'
import styles from './input-styles.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps): JSX.Element => (
    <div className={styles.inputWrap}>
      <input {...props} />
      <span className={styles.status}>🔴</span>
    </div>
)

export default Input
