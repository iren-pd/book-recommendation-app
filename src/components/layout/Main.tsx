import React, { FC } from 'react'
import AppRouter from '@recobook/routes/AppRouter'

export const Main:FC = () => {
  return (
    <main className="bg-gradient-to-r from-green-200 to-green-400 flex justify-center py-8">
        <div className="w-full max-w-5xl px-4">
        <AppRouter/>
        </div>
    </main>
  )
}
