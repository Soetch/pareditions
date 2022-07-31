/**
 * Creates a new Section of cards.
 * @param  {children} children The code you'll put in there.
 */

export default function CardSectionSection({children}) {
    return (
        <>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center mt-6'>
                {children}
            </div>
        </>
    )
}