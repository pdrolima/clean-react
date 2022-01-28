import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import FormContext from '@/presentation/contexts/form/form-context'

const FormStatus = (): JSX.Element => {
  const { isLoading, errorMessage } = useContext(FormContext)
  return (
       <div data-testid="error-wrap" className={styles.errorWrap}>
           { isLoading && <Spinner className={styles.spinner} /> }
           { errorMessage && <span className={styles.error}>{ errorMessage }</span> }
       </div>
  )
}
export default FormStatus
