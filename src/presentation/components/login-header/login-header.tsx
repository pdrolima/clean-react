import React, { memo } from 'react'
import styles from './login-header-styles.scss'
import Logo from '@/presentation/components/logo/logo'

const LoginHeader = (): JSX.Element => (
    <header className={styles.header}>
        <Logo/>
        <h1>4Dev - Enquete para programadores</h1>
    </header>
)

export default memo(LoginHeader)
