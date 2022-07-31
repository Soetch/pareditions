/**
 * Creates a new card.
 * @param  {children} children The code you'll put in there.
 */

 export default function Card_UN({children}) {
    return (
        <>
            <div className='box-border bg-unshakeable h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}