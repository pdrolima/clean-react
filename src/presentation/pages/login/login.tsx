import React, { useState } from 'react'
import styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext from '@/presentation/contexts/form/form-context'

type State = {
  isLoading: boolean
  errorMessage: string
}

export default function Login (): JSX.Element {
  const [state] = useState<State>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={styles.login}>
          <LoginHeader />
          <FormContext.Provider value={state}>
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
          </FormContext.Provider>
          <Footer />
    </div>
  )
}
