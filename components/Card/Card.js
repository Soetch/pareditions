/**
 * Creates a new card.
 * @param  {children} children The code you'll put in there.
 */

export default function Card({children}) {
    return (
        <>
            <div className='box-border h-96 w-96 bg-gray-100 rounded-3xl text-center mt-6 shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}