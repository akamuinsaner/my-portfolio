import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
            <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
                <a
                    className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    href="#information"
                >
                    <KeyboardDoubleArrowUpIcon />
                </a>
            </div>
            <div className='flex flex-col items-center gap-y-6'>
                <div className='flex gap-x-4 text-neutral-500'>
                    <a
                        className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
                        href="mailto:elcidwang@gmail.com"
                        target="_blank"
                    >
                        <MailOutlineIcon />
                    </a>
                    <a
                        className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
                        href="https://www.linkedin.com/in/shuai-wang-877a432b1/"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
                        href="https://github.com/akamuinsaner"
                        target="_blank"
                    >
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}