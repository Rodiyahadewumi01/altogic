import Button from '@/components/Button'
import Input from '@/components/Input'
import PoweredByAltogic from '@/components/PoweredByAltogic'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '@/hooks/useAuth'
import * as yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SetNewPassword() {
  const router = useRouter()
  const query = router.query

  const key = query.access_token

  const registerSchema = new yup.ObjectSchema({
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be at most 50 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  async function formSubmit(form) {
    let pswChangeForm = {
      newPassword: form.password,
      accessToken: key,
    }

    await resetPassword(pswChangeForm)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(registerSchema),
  })
  const { resetPassword, error, loading, resetSuccess } = useAuth()

  useEffect(() => {
    if (error) {
      setError('email', { type: 'manuel', message: 'An error occured' })
    }
  }, [error, setError])
  return (
    <div>
      <div className='relative h-screen'>
        <PoweredByAltogic />

        <div className='grid xl:grid-cols-2 h-full'>
          <div className='flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto w-full max-w-lg lg:w-[489px]'>
              <div>
                <Image
                  width={192}
                  height={66}
                  className='mb-20 md:mb-44'
                  src='/logo.svg'
                  alt='Altogic'
                />
                <h2 className='text-4xl font-bold text-slate-800'>Reset password</h2>
                <p className='mt-4 text-base tracking-[-0.4px] text-slate-600'>
                  Please enter your new password below.
                </p>
              </div>

              <div className='mt-8'>
                <div className='mt-6'>
                  {!resetSuccess && (
                    <form onSubmit={handleSubmit(formSubmit)} method='POST' className='space-y-6'>
                      <Input
                        label='Password'
                        id='password'
                        type='password'
                        name='password'
                        register={register('password')}
                        error={errors.password}
                        placeholder='************ '
                      />
                      <Input
                        label='Password Confirm'
                        id='passwordConfirmation'
                        type='password'
                        name='passwordConfirmation'
                        register={register('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                        placeholder='************ '
                      />

                      <div>
                        <Button
                          loading={loading}
                          type='submit'
                          className='w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          label='Send'
                        />
                      </div>
                    </form>
                  )}
                  {resetSuccess && (
                    <span className='inline-block text-m text-gray-400'>Password is updated</span>
                  )}
                  <p className='text-center mt-10 md:mt-20 text-sm text-gray-600'>
                    Back to{' '}
                    <Link
                      href='/login'
                      className='font-medium text-indigo-700 tracking-[-0.4px] hover:text-indigo-500'
                    >
                      <a className='font-medium text-indigo-700 tracking-[-0.4px] hover:text-indigo-500'>
                        Login{' '}
                      </a>
                    </Link>
                    or{' '}
                    <Link href='/create-an-account'>
                      <a className='font-medium text-indigo-700 tracking-[-0.4px] hover:text-indigo-500'>
                        Create an account.
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden xl:block relative'>
            <Image
              className='absolute inset-0 h-full w-full object-cover'
              src='/login.avif'
              alt=''
              layout='fill'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
