import { PUBLIC_ENVS } from '@/lib/env'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(PUBLIC_ENVS.NEXT_PUBLIC_FORMSPREE_KEY)

  if (state.succeeded) {
    toast.success('Thanks for contacting us!')
  }

  return (
    <div className="bg-slate-900 pt-20">
      <h2 className="flex justify-center text-lg font-medium">Contact Brennan</h2>
      <form
        className="mx-auto grid max-w-3xl gap-y-6 rounded-lg px-4 py-16 sm:px-6 lg:px-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-sm font-medium text-[--color-text-default]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="h-10 appearance-none rounded-md border-0 px-3 text-[--color-text-input] ring-1 ring-[--color-border-default] outline-none ring-inset placeholder:text-[--color-text-muted] focus-visible:ring-[1.5px] focus-visible:ring-[--color-border-active] focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-inset"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-sm font-medium text-[--color-text-default]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="h-10 appearance-none rounded-md border-0 px-3 text-[--color-text-input] ring-1 ring-[--color-border-default] outline-none ring-inset placeholder:text-[--color-text-muted] focus-visible:ring-[1.5px] focus-visible:ring-[--color-border-active] focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-inset"
            id="email"
            name="email"
            required
          />
          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            className="text-[--color-text-warning]"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-sm font-medium text-[--color-text-default]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="resize-y appearance-none rounded-md border-0 px-3 py-2 text-[--color-text-input] ring-1 ring-[--color-border-default] outline-none ring-inset placeholder:text-[--color-text-muted] focus-visible:ring-[1.5px] focus-visible:ring-[--color-border-active] focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-inset"
            id="message"
            name="message"
          />
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
            className="text-[--color-text-warning]"
          />
          <p className="block text-sm text-[--color-text-muted]">
            I usually respond within 1-2 business days.
          </p>
        </div>
        <div className="flex flex-row-reverse gap-x-6">
          <button
            className="cursor-pointer rounded-md bg-[--color-primary] px-8 py-4 text-sm leading-4 font-medium text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-[--color-highlight]"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
