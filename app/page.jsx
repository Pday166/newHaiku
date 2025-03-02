import Link from 'next/link';
import {register} from '../actions/userController'
import RegisterForm from '../components/RegisterForm';

export default function Page() {
return (
    <>
    <p className='text-center text-2xl text-gray-600 mb-5'>Don&rsquo;t have and account? <strong>Create One</strong></p>
    <RegisterForm />
    </>
)
}