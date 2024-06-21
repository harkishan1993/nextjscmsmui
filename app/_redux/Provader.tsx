'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persister, store } from './store'

function Provader({ children } : { children : React.ReactNode }) {
    persister()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Provader