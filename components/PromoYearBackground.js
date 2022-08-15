import Image from "next/dist/client/image"

export default function PromoYearBackground({children}) {
    return (
        <>
            <div className="text-center bg-perles text-gray-800 py-12 px-6 grid place-items-center">
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}