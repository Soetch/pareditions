/**
 * Creates a new card.
 * @param  {children} children The code you'll put in there.
 */

 export function Card_UN({children}) {
    return (
        <>
            <div className='box-border bg-unshakeable h-96 w-96 rounded-3xl text-center shadow-inner backdrop-blur-sm'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_LR({children}) {
    return (
        <>
            <div className='box-border bg-low-ranking h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_IKEA({children}) {
    return (
        <>
            <div className='box-border bg-ikea h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Seth({children}) {
    return (
        <>
            <div className='box-border bg-seth h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Devil({children}) {
    return (
        <>
            <div className='box-border bg-devil h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Madison({children}) {
    return (
        <>
            <div className='box-border bg-madison h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Wood({children}) {
    return (
        <>
            <div className='box-border bg-wood h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Who({children}) {
    return (
        <>
            <div className='box-border bg-who h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Lower({children}) {
    return (
        <>
            <div className='box-border bg-lower h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}

export function Card_Lucky({children}) {
    return (
        <>
            <div className='box-border bg-lucky h-96 w-96 rounded-3xl text-center shadow-inner'>
                <main>{children}</main>
            </div>
        </>
    )
}