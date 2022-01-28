import React from 'react'
import styles from './spinner-styles.scss'

type Props = {
  className?: React.HTMLAttributes<HTMLElement>['className']
}

export function Spinner (props: Props): JSX.Element {
  return (
        <div {...props} className={[styles.spinner, props.className].join(' ')}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
  )
}
