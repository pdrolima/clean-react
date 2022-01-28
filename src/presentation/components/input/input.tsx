import React, { useContext } from 'react'
import styles from './input-styles.scss'
import FormContext from '@/presentation/contexts/form/form-context'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps): JSX.Element => {
  const { errorState } = useContext(FormContext)
  // eslint-disable-next-line react/prop-types
  const error = errorState[props.name]

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
        <div className={styles.inputWrap}>
            <input {...props} />
            {/* eslint-disable-next-line react/prop-types */}
            <span data-testid={`${props.name}-status`} title={getTitle()} className={styles.status}>{getStatus()}</span>
        </div>
  )
}

export default Input
