import { Suspense } from "react";
import Alltickets from "./Alltickets";
import Loading from "../loading";

export default function Tickets(){
    return (
        <main>
            <nav>
                <div>
                    <h1>Tickets</h1>
                    <p>Currently Opened Tickets</p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
            <Alltickets/>
            </Suspense>
        </main>
    )
}