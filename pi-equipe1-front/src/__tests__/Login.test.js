import { getByText, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';

import Login from '.././pages/Login'

test('login with correct info', async () => {

  const handleSubmit = jest.fn()

  render(<BrowserRouter><Login onSubmit={handleSubmit} /></BrowserRouter>)

  userEvent.type(screen.getByLabelText(/email/i), 'ca_haka@gmail.com')
  userEvent.type(screen.getByLabelText(/password/i), 'cahakas')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'ca_haka@gmail.com',
      password: 'cahakas',
    }),
  )
})

test('login with incorrect info', async () => {

  const handleSubmit = jest.fn()

  render(<BrowserRouter><Login onSubmit={handleSubmit} /></BrowserRouter>)

  userEvent.type(screen.getByLabelText(/email/i), 'ca_haka@gmail.co')
  userEvent.type(screen.getByLabelText(/password/i), 'cahakas')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))

  // await waitFor(() => {
  //   expect(screen.getByText('Por favor, tente novamente, suas credenciais são inválidas')).toBeInTheDocument()
  // })

  await waitFor(() => 
    expect(handleSubmit).toHaveBeenCalledWith({
      email: '', password: '',
    }),
  )
})