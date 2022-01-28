import React from 'react'
import styles from './login-styles.scss'
import { Spinner } from '@/presentation/components/spinner/spinner'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'

export function Login (): JSX.Element {
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
              <div className={styles.errorWrap}>
                    <Spinner className={styles.spinner}/>
                    <span className={styles.error}>Erro</span>
              </div>
          </form>
          <Footer />
    </div>
  )
}
