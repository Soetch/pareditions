/**
 * Creates a Title for a Card.
 * @param  {children} children The title.
 */

export default function CardTitle({children}) {
    return (
        <>
            <a className='text-3xl font-bold inline'>
                {children}
            </a>
        </>
    )
}