export default function TitleContainer({children}) {
    return (
        <>
            <div className='grid items-center justify-center box-border bg-white h-24 w-24 rounded-3xl bg-opacity-70 text-center'>
                <main>{children}</main>
            </div>
        </>
    )
}