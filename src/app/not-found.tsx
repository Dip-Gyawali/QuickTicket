import Link from "next/link";

export default function NotFound(){
    return(
        <main className="text-center">
            <h2 className="text-3xl">OOPS ! Problem Occured</h2>
            <p>We couldn't Found the Page you were looking for</p>
            <p>Go back to <Link href='/'>Dashboard</Link></p>
        </main>
    )
}