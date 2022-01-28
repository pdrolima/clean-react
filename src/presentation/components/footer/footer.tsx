import React, { memo } from 'react'
import styles from './footer-styles.scss'

const Footer = (): JSX.Element => (
    <footer className={styles.footer}/>
)

export default memo(Footer)
