import Link from "next/link"

/**
 * Creates a new CardButton.
 * @param  {String} href The link towards your page.
 */

export default function CardButton({href}) {
    return (
        <>
            <Link href={href}>
                <button>
                    <div className='border-box bg-gray-200 h-10 w-36 rounded-xl flex items-center justify-center mt-6 shadow-inner hover:shadow-xl'>
                        <a className='font-bold text-black sticky'>
                            Read more...
                        </a>
                    </div>
                </button>
            </Link>
        </>
    )
}