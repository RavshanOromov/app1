
import { useState } from "react"
import { icon } from "../constants"
import { Input } from "../ui"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="text-center mt-5">
      <main class="form-signin w-25 m-auto">
        <form>
          <img class="mb-4" src={icon} alt="" width="72" height="57" />
          <h1 class="h3 mb-2 fw-normal">Please login</h1>

    <Input label={'Email'} state={email} setState={setEmail} type="email" />
    <Input label={'Password'} state={password} setState={setPassword} type="password" />
    <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
    <p class="mt-5 mb-3 text-body-secondary mt-2">© 2017-2023</p>
        </form>
      </main>
    </div>
  )
}

export default Register