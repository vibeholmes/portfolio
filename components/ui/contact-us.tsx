'use client'
import { PUBLIC_ENVS } from '@/lib/env'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(PUBLIC_ENVS.NEXT_PUBLIC_FORMSPREE_KEY)

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thanks for contacting us!')
    }
  }, [state.succeeded])

  useEffect(() => {
    if (state.submitting) {
      toast.loading('Submitting ...')
    }
  }, [state.submitting])

  return (
    <div>
      <form
        className="mx-auto grid max-w-xl gap-y-6 rounded-lg px-0 py-8 sm:px-4 lg:px-12"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-1.5">
          <label className="block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="block h-10 w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:focus:outline-white"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="block h-10 w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:focus:outline-white"
            id="email"
            name="email"
            required
          />
          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            className="text-sm text-orange-500"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label className="block text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:focus:outline-white"
            id="message"
            name="message"
            rows={5}
          />
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
            className="text-sm text-orange-500"
          />
          <p className="block text-sm text-[--color-text-muted]">
            I usually respond within 1-2 business days.
          </p>
        </div>
        <div className="flex flex-row-reverse gap-x-6">
          <button
            className="flex cursor-pointer items-center justify-between gap-2 rounded-md border-1 px-6 py-3 text-sm leading-4 font-medium transition-colors duration-200 dark:hover:bg-white/5"
            type="submit"
          >
            Send
            {state.submitting && (
              <div className="flex items-center justify-center">
                <div className="mt-[1px] h-3 w-3 animate-spin rounded-full border-2 border-black border-t-transparent dark:border-white dark:border-t-transparent"></div>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
