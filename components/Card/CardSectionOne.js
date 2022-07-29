export default function CardSectionOne({children}) {
    return (
        <>
            <div className='inline-grid grid-cols-1'>
                {children}
            </div>
        </>
    )
}