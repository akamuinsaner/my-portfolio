import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/Link';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Main() {
    return (
        <section className="h-screen bg-[url('/main-bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col">
            <h1 className="text-8xl text-white">I'm Shuai Wang.</h1>
            <h4 className="text-5xl my-8 text-white">A Developer</h4>
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
            <ArrowDropDownCircleIcon
                fontSize="large"
                className="text-white absolute left-1/2 bottom-10 cursor-pointer -translate-x-1/2"
            />
        </section>
    )
}