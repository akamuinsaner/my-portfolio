'use client';
import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const onSubmit = (e: any) => {
        e.preventDefault();
        fetch(
            `/contact`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData),
            }
        ).then(res => res.json())
        .then(data => {
            alert('Send successfully!')
        })
    }

    return (
        <section id="contact" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <MailOutlineIcon className="hidden h-16 w-16 text-white md:block" />
                        <h2 className="text-2xl font-bold text-white">Get in touch.</h2></div>
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className='order-2 col-span-1 md:order-1'>
                        <form
                            className='grid min-h-[320px] grid-cols-1 gap-y-4'
                            onSubmit={onSubmit}
                        >
                            <input
                                className="px-2 py-3 bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                                name="name"
                                placeholder="Name"
                                required={true}
                                type="text"
                                value={emailData.name}
                                onChange={e => setEmailData({ ...emailData, name: e.target.value })}
                            />
                            <input
                                autoComplete="email"
                                className="px-2 py-3 bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                                name="email"
                                placeholder="Email"
                                required={true}
                                type="email"
                                value={emailData.email}
                                onChange={e => setEmailData({ ...emailData, email: e.target.value })}
                            />
                            <textarea
                                className="px-2 py-3 bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm"
                                maxLength={250}
                                name="message"
                                placeholder="Message"
                                required={true}
                                rows={6}
                                value={emailData.message}
                                onChange={e => setEmailData({ ...emailData, message: e.target.value })}
                            ></textarea>
                            <button
                                aria-label="Submit contact form"
                                className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                                type="submit"
                            >Send Message</button>
                        </form>
                    </div>
                    <div className='order-1 col-span-1 flex flex-col gap-y-4 md:order-2'>
                        <p className="prose leading-6 text-neutral-300">
                            Below are my contacts,please message me if you are interested in my experience,I will be so thankful.
                        </p>
                        <dl className='flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2'>
                            <dd className="flex items-center">
                                <a
                                    className="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                    href="mailto:elcidwang@gmail.com"
                                    target="_blank"
                                >
                                    <MailOutlineIcon className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                                    <span className="ml-3 text-sm sm:text-base">elcidwang@gmail.com</span>
                                </a>
                            </dd>
                            <dd className="flex items-center">
                                <a
                                    className="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                    href="https://www.linkedin.com/in/elcidwang/"
                                    target="_blank"
                                >
                                    <LinkedInIcon className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                                    <span className="ml-3 text-sm sm:text-base">https://www.linkedin.com/in/elcidwang/</span>
                                </a>
                            </dd>
                            <dd className="flex items-center">
                                <a
                                    className="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                    href="https://github.com/akamuinsaner"
                                    target="_blank"
                                >
                                    <GitHubIcon className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                                    <span className="ml-3 text-sm sm:text-base">https://github.com/akamuinsaner</span>
                                </a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}