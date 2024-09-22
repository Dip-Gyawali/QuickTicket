import Link from "next/link";

export default function TicketError(){
    return (
        <main className="text-center">
            <h1 className="text-3xl">Id not Found</h1>
            <p>We couldn't found the ID you were looking for.</p>
            <p>Return to <Link href='/tickets'>Tickets</Link> section</p>
        </main>
    )
}