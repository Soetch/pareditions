/**
 * Creates a text zone in a Card.
 * @param  {children} children The text.
 */

export default function CardText({children}) {
    return (
        <>
            <p className='box-border bg-white rounded-xl w-86 mt-2 ml-5 mr-5 italic text-center bg-opacity-70'>
                <main>{children}</main>
            </p>
        </>
    )
}