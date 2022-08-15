import Link from "next/link"

/**
 * Creates a new CardButton.
 * @param  {String} href The link towards your page.
 */

export default function PromoYearButton({href}) {
    return (
        <>
            <Link href={href}>
                <button>
                    <div className='border-box bg-opacity-70 bg-white h-10 w-36 rounded-xl flex items-center bg-opacity-30 justify-center shadow-md hover:shadow-2xl'>
                        <a className='font-bold text-black sticky'>
                            Read the PDF...
                        </a>
                    </div>
                </button>
            </Link>
        </>
    )
}