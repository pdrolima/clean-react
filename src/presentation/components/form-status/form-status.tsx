import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import FormContext from '@/presentation/contexts/form/form-context'

const FormStatus = (): JSX.Element => {
  const { state, errorState } = useContext(FormContext)
  const { isLoading } = state
  return (
       <div data-testid="error-wrap" className={styles.errorWrap}>
           { isLoading && <Spinner className={styles.spinner} /> }
           { errorState.main && <span className={styles.error}>{ errorState.main }</span> }
       </div>
  )
}
export default FormStatus
