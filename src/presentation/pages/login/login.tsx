import React, { useState } from 'react'
import styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext from '@/presentation/contexts/form/form-context'

export default function Login (): JSX.Element {
  const [state] = useState({
    isLoading: false

  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div className={styles.login}>
          <LoginHeader />
          <FormContext.Provider value={{ state, errorState }}>
              <form className={styles.form}>
                  <h2>Login</h2>
                  <Input type="email" name="email" placeholder="Digite seu email" title="Campo obrigatório"/>
                  <Input type="password" name="password" placeholder="Digite sua senha" title="Campo obrigatório" />
                  <button type="submit" data-testid="submit" disabled>Entrar</button>
                  <span className={styles.link}>
                 Criar Conta
              </span>
                  <FormStatus />
              </form>
          </FormContext.Provider>
          <Footer />
    </div>
  )
}
