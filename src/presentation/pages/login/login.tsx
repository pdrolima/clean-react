import React from 'react'
import styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

export default function Login (): JSX.Element {
  return (
    <div className={styles.login}>
          <LoginHeader />
          <form className={styles.form}>
              <h2>Login</h2>
              <Input type="email" name="email" placeholder="Digite seu email"/>
              <Input type="password" name="password" placeholder="Digite sua senha"/>
              <button type="submit">Entrar</button>
              <span className={styles.link}>
                 Criar Conta
              </span>
              <FormStatus />
          </form>
          <Footer />
    </div>
  )
}
