/**
 * Creates a new card that takes twice the room for one.
 * @param  {children} children The code you'll put in there.
 */

export default function CardTwo({children}) {
    return (
        <>
            <div className='box-border h-96 w-96 bg-gray-100 rounded-3xl text-center ml-16 mt-6 shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}