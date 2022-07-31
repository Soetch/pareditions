import Image from "next/dist/client/image"

export default function PromoYearText({children}) {
    return (
        <>
            <div className="text-center text-gray-800 place-items-center font-bold text-2xl">
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}