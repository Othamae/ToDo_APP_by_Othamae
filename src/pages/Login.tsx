import { useState } from 'react'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Aquí puedes manejar la lógica del inicio de sesión
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
