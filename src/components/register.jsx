import { useState } from "react"
import { icon } from "../constants"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import { registerUserStart } from "../slice/auth"

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const loginHandler = e => {
    e.preventDefault()
    dispatch(registerUserStart())
  }
  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={icon} alt="" width="72" height="57" />
          <h1 className="h3 mb-2 fw-normal">Please register</h1>

    <Input label={'Username'} state={name}  setState={setName}/>
    <Input label={'Email'} state={email} setState={setEmail} type="email" />
    <Input label={'Password'} state={password} setState={setPassword} type="password" />
    <button className="btn btn-primary w-100 py-2" type="submit" onClick={loginHandler} disabled={isLoading} > {isLoading ? 'Loading...' : 'Register'} </button>
    <p className="mt-5 mb-3 text-body-secondary mt-2">© 2017-2023</p>
        </form>
      </main>
    </div>
  )
}

export default Register