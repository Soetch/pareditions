/**
 * Creates a Subtitle for a Card.
 * @param  {children} children The title.
 */

 export default function CardSubtitle({children}) {
    return (
        <>
            <a className='text-lg italic'>
                <br></br>
                {children}
            </a>
        </>
    )
}