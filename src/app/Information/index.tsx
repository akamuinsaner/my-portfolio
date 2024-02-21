import Link from 'next/Link';

const SKILLS = [
    {
        name: 'Programming language',
        skills: [
            { name: 'Html', proficiency: '90%' },
            { name: 'Css', proficiency: '90%' },
            { name: 'Javascript', proficiency: '90%' },
            { name: 'Typescript', proficiency: '90%' },
            { name: 'Python', proficiency: '50%' },
            { name: 'Java', proficiency: '50%' },
        ]
    },
    {
        name: 'Library & Framework',
        skills: [
            { name: 'React', proficiency: '90%' },
            { name: 'Jquery', proficiency: '90%' },
            { name: 'Next', proficiency: '50%' },
            { name: 'Angular', proficiency: '50%' },
            { name: 'Django', proficiency: '50%' },
            { name: 'Spring', proficiency: '50%' },
        ]
    },
    {
        name: 'Css Relavant',
        skills: [
            { name: 'Less', proficiency: '80%' },
            { name: 'Sass', proficiency: '80%' },
            { name: 'Antd', proficiency: '80%' },
            { name: 'Material-ui', proficiency: '80%' },
            { name: 'Tailwindcss', proficiency: '60%' },
        ]
    },
    {
        name: 'Frontend tools',
        skills: [
            { name: 'Webpack', proficiency: '80%' },
            { name: 'Gulp', proficiency: '80%' },
        ]
    },
    {
        name: 'Databases',
        skills: [
            { name: 'Sql', proficiency: '50%' },
            { name: 'MongoDB', proficiency: '50%' },
        ]
    },
    {
        name: 'Infrastructure',
        skills: [
            { name: 'Docker', proficiency: '70%' },
            { name: 'Jenkins', proficiency: '60%' },
        ]
    },
]

export default function Information() {
    return (
        <section className="p-40 bg-[url('/info-bg.jpg')] bg-cover bg-center">
            <div className="mx-auto max-w-screen-lg divide-y-2 divide-neutral-300">
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <h2 className="self-baseline text-xl font-bold uppercase text-neutral-800 border-solid border-orange-500 border-l-4 pl-4">Education</h2>
                    </div>
                    <div className="col-span-1 flex flex-col md:col-span-3">
                        <h2 className="text-xl font-bold">BE Communication Engineering</h2>
                        <div className="flex items-center justify-center gap-x-2 md:justify-start">
                            <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                <Link href="https://en.uestc.edu.cn/">University of Electronic Science and Technology of China</Link>
                            </span>
                            <span>•</span>
                            <span className="flex-1 text-sm sm:flex-none">Sep 2012 - Jun 2016</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <h2 className="self-baseline text-xl font-bold uppercase text-neutral-800 border-solid border-orange-500 border-l-4 pl-4">Work</h2>
                    </div>
                    <div className="col-span-1 flex flex-col md:col-span-3 gap-y-8">
                        <div>
                            <h2 className="text-xl font-bold">Senior Frontend Engineer</h2>
                            <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                    <Link href="https://www.perfectworld.com/">Perfect World Co., Ltd.</Link>
                                </span>
                                <span>•</span>
                                <span className="flex-1 text-sm sm:flex-none">Jul 2020 - Oct 2023 / Beijing China</span>
                            </div>
                            <ul className='mt-4 flex flex-col gap-4'>
                                <li>Collaborated with team members to jointly develop the company's internal community
                                    app with embedded H5 and game-embedded community</li>
                                <li>
                                    Collaborated with the server-side team to develop a fully functional and deliverable
                                    CRM system, which increased customer retention and boosted business revenue.
                                </li>
                                <li>
                                    Extracted and created a library of common business components, reducing boilerplate
                                    code within projects, shortening development time and improving the efficiency of the
                                    development team.
                                </li>
                                <li>
                                    Optimized the webpack configuration by utilizing DLL (Dynamic Link Library) to cache
                                    third-party libraries and HappyPack for multi-threaded building, which improved the
                                    project build speed by nearly 50%.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Full Stack Engineer</h2>
                            <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                    <Link href="https://flowpp.com/">赋乐科技（Flow++)</Link>
                                </span>
                                <span>•</span>
                                <span className="flex-1 text-sm sm:flex-none">Jul 2019 - Jul 2020 / Beijing China</span>
                            </div>
                            <ul className='mt-4 flex flex-col gap-4'>
                                <li>Developed the Flow series of internal systems for the company using Preact, TypeScript
                                    , Node.js, and MySQL.</li>
                                <li>
                                    Developed Preact-based form validation component (similar to Ant Design's Form) and
                                    implemented it within the system, increasing the code development efficiency.
                                </li>
                                <li>
                                    Set up a private Docker registry for the company and integrated Jenkins for automated
                                    deployment in projects, addressing the issue of manual deployment and standardizing
                                    the project development process.
                                </li>
                                <li>
                                    Used rem, media queries, and transform to solve the adaptation problem of the
                                    homepage on different devices, especially for large screens.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Frontend Developer</h2>
                            <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                    Yueshiguanghe technology
                                </span>
                                <span>•</span>
                                <span className="flex-1 text-sm sm:flex-none">Aug 2017 - June 2019 / Dalian China</span>
                            </div>
                            <ul className='mt-4 flex flex-col gap-4'>
                                <li>Used technical tools such as HTML5, Less, and Webpack to build the company's official
                                    website, and integrated tools like Docker and Jenkins to achieve automated building and
                                    deployment.
                                </li>
                                <li>
                                    Modified HTML files to optimize the company's official website for SEO search increasing
                                    website traffic by nearly 70%.
                                </li>
                                <li>
                                    Used React, Redux, and Ant Design to build and develop a personnel management
                                    system. Optimized webpack configuration to reduce bundle size and improve first-screen
                                    load speed by nearly 50%.
                                </li>
                                <li>
                                    Modified the Dockerfile to use a multi-stage build approach, which solved the issue of
                                    slow plugin downloads and sped up the build process by nearly 30%.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <h2 className="self-baseline text-xl font-bold uppercase text-neutral-800 border-solid border-orange-500 border-l-4 pl-4">Skills</h2>
                    </div>
                    <div className="col-span-1 flex flex-col md:col-span-3">
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                            {
                                SKILLS.map(item => (
                                    <div className='flex flex-col'>
                                        <span className="text-center text-lg font-bold">{item.name}</span>
                                        <div className="flex flex-col gap-y-2">
                                            {
                                                item.skills.map((item => (
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 text-sm font-medium">{item.name}</span>
                                                        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                                                            <div className="h-full rounded-full bg-orange-400" style={{
                                                                width: item.proficiency
                                                            }}></div>
                                                        </div>
                                                    </div>
                                                )))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <h2 className="self-baseline text-xl font-bold uppercase text-neutral-800 border-solid border-orange-500 border-l-4 pl-4">Projects</h2>
                    </div>
                    <div className="col-span-1 md:col-span-3 gap-y-8 flex flex-col">
                        <div className='flex flex-col relative'>
                            <div className='absolute right-0 top-0'>Dec 2023 - present</div>
                            <h2 className="text-xl font-bold">mr-components</h2>
                            <div className="flex flex-col">
                                <div>
                                    <label className="inline-block w-24">website:</label>
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                        <Link href="https://mr-component.site/">https://mr-component.site/</Link>
                                    </span>
                                </div>
                                <div>
                                    <label className="inline-block w-24">github:</label>
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                        <Link href="https://github.com/akamuinsaner/mr-components">https://github.com/akamuinsaner/mr-components</Link>
                                    </span>
                                </div>
                                <div>
                                    <label className="inline-block w-24">techs:</label>
                                    <span>React, Typescript, Material-ui</span>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col relative'>
                            <div className='absolute right-0 top-0'>Nov 2023 - present</div>
                            <h2 className="text-xl font-bold">Shuaibb Photo Management</h2>
                            <div className="flex flex-col">
                                <div>
                                    <label className="inline-block w-24">github1:</label>
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                        <Link href="https://github.com/akamuinsaner/shuaibb-frontend">https://github.com/akamuinsaner/shuaibb-frontend</Link>
                                    </span>
                                </div>
                                <div>
                                    <label className="inline-block w-24">github2:</label>
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                        <Link href="https://github.com/akamuinsaner/shuaibb-backend">https://github.com/akamuinsaner/shuaibb-backend</Link>
                                    </span>
                                </div>
                                <div>
                                    <label className="inline-block w-24">techs:</label>
                                    <span>React, Typescript, Material-ui, Python, Django, Postgresql, Docker, Jenkins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}