import Link from "next/link"

/**
 * Creates a new CardButton.
 * @param  {String} href The link towards your page.
 */

export default function PromoYearButton2022({href}) {
    return (
        <>
            <Link href={href}>
                <button>
                    <div className='border-box bg-opacity-70 bg-white h-10 w-36 rounded-xl flex items-center justify-center shadow-inner hover:shadow-xl'>
                        <a className='font-bold text-black sticky'>
                            Read the PDF...
                        </a>
                    </div>
                </button>
            </Link>
        </>
    )
}