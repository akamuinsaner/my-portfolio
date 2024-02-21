import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/Link';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Main() {
    return (
        <section className="h-screen bg-[url('/main-bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col">
            <div className='flex flex-col gap-y-6 items-center'>
                <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">I&rsquo;m Shuai Wang.</h1>
                <h4 className="text-5xl text-white">A Developer</h4>
                <div className="text-white flex gap-x-4">
                    <Link
                        href="mailto:elcidwang@gmail.com"
                        className="hover:text-black"
                        target="_blank"
                    >
                        <MailOutlineIcon fontSize="large" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/shuai-wang-877a432b1/"
                        className="hover:text-black"
                        target="_blank"
                    >
                        <LinkedInIcon fontSize="large" />
                    </Link>
                    <Link
                        href="https://github.com/akamuinsaner"
                        className="hover:text-black"
                        target="_blank"
                    >
                        <GitHubIcon fontSize="large" />
                    </Link>

                </div>
                <div className='flex gap-x-4'>
                    <Link
                        className="flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500"
                        href="http://101.42.247.31/resume"
                    >
                        Resume
                        <CloudDownloadIcon />
                    </Link>
                    <Link
                        className="flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-white ring-white"
                        href="#contact"
                    >
                        Contact
                        <MailOutlineIcon />
                    </Link>
                </div>
            </div>

            <Link
                href="#information"
                className="absolute left-1/2 bottom-10 -translate-x-1/2"
            >
                <ArrowDropDownCircleIcon
                    fontSize="large"
                    className="text-white"
                />
            </Link>

        </section>
    )
}