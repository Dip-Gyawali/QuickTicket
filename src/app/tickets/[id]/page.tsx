async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export default async function TicketDetail({
  params,
}: {
  params: { id: string };
}) {
  const ticket = await getData(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created By: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} Priority</div>
      </div>
    </main>
  );
}
