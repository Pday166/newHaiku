"use client"
import {register} from '../actions/userController'
import { useActionState, useFormStatus } from 'react'


export default function RegisterForm() {
    const [formState, formAction] = useActionState(register, {})
    console.log(formState)
return (
    <form action={formAction} className="max-w-xs mx-auto">
        <div className="mb-3">
        <input name="username" type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="mb-3">
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        <button className='btn btn-secondary mt-5'>Create Account</button>
        </div>
    </form>
)
}