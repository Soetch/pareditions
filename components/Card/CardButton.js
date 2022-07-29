import Link from "next/link"

export default function CardButton({href}) {
    return (
        <>
            <Link href={href}>
                <button>
                    <div className='border-box bg-gray-200 h-10 w-36 rounded-xl flex items-center justify-center mt-5 shadow-inner hover:shadow-xl'>
                        <a className='font-bold text-black sticky'>
                            Read more...
                        </a>
                    </div>
                </button>
            </Link>
        </>
    )
}