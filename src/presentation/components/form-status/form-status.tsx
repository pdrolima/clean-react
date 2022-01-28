import React from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const FormStatus = (): JSX.Element => (
    <div className={styles.errorWrap}>
        <Spinner className={styles.spinner}/>
        <span className={styles.error}>Erro</span>
    </div>
)

export default FormStatus
