import { useState } from 'react'
import AxHeader from 'components/ax_header'
import AxSidebar from 'components/ax_sidebar'
import { BanIcon } from '@heroicons/react/solid';

interface Props {
    children: React.ReactNode
}

export default function AxLayout({ children }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="min-h-full">
                <div className=" flex flex-col flex-1">
                    <AxHeader setIsSidebarOpen={setSidebarOpen}></AxHeader>
                    {children}
                    <footer className="bg-indigo-50" aria-labelledby="footer-heading">
                        <h2 id="footer-heading" className="sr-only">
                            Footer
                        </h2>
                        <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-4 lg:px-4">
                            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                                <div className="space-y-8 xl:col-span-1">
                                    <img
                                        className="h-10"
                                        src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
                                        alt="Company name"
                                    />
                                    {/* <p className="text-gray-500 text-base">
                                        Making the world a better place through constructing elegant hierarchies.
                                    </p> */}
                                   
                                </div>
                                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                                    <div className="md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Transparente</h3>
                                            <ul role="list" className="mt-4 space-y-4">
                                               
                                                    {/* <li key="asd">
                                                        <a href="das" className="text-base text-gray-500 hover:text-gray-900">
                                                           dsfdsf
                                                        </a>
                                                    </li> */}
                                            </ul>
                                        </div>
                                        <div className="mt-12 md:mt-0">
                                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Apoyo</h3>
                                            {/* <ul role="list" className="mt-4 space-y-4">
                                                    <li key="h">
                                                        <a href="d" className="text-base text-gray-500 hover:text-gray-900">
                                                           cdf
                                                        </a>
                                                    </li>
                                                </ul> */}
                                        </div>
                                    </div>
                                    <div className="md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Compañia</h3>
                                            {/* <ul role="list" className="mt-4 space-y-4">
                                               
                                                    <li key="e">
                                                        <a href="ds"className="text-base text-gray-500 hover:text-gray-900">
                                                            ddfsdf
                                                        </a>
                                                    </li>
                                            </ul> */}
                                        </div>
                                        <div className="mt-12 md:mt-0">
                                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Impulso</h3>
                                            {/* <ul role="list" className="mt-4 space-y-4">
                                                <li key="s">
                                                        <a href="ee"className="text-base text-gray-500 hover:text-gray-900">
                                                            dsfsd
                                                        </a>
                                                    </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 border-t border-gray-200 py-8">
                                <p className="text-base text-gray-400 xl:text-center">Colca, 2022</p>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </>
    )
}
