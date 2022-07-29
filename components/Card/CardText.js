export default function CardText({children}) {
    return (
        <>
            <p className='mt-2 ml-6 mr-6 text-justify'>
                <main>{children}</main>
            </p>
        </>
    )
}