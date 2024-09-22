import Link from "next/link";

type Ticket = {
    id:string;
    title:string;
    body:string;
    priority:'low' | 'medium' | 'high';
    user_email:string;
}


async function getData(){
    const res = await fetch('http://localhost:5000/tickets',{
        next:{
            revalidate:0 //0 means no cache data so next refetches all time new data which might be slow
        }
    });
    return res.json()
}


export default async function Alltickets() {
    const tickets: Ticket[] = await getData();
  return (
    <>
    {tickets.map((ele)=>(
        <Link href={`tickets/${ele.id}`}>
      <div key={ele.id} className="card my-5">
        <h1>{ele.title}</h1>
        <p>{ele.body.slice(0,200)}...</p>
        <div className={`pill ${ele.priority}`}>
            {ele.priority} Priority
        </div>
      </div>
        </Link>
    ))}
    </>
  )
}
