import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function TicketDetail() {
  // Replace with real data
  const ticket = {
    id: 1,
    subject: "Unable to Login",
    status: "Open",
    description: "I am unable to login to my account. Every time I try, I get an error message.",
    priority: "High",
    createdAt: "2025-06-02",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-10 w-full max-w-2xl">
        <div className="mb-4">
          <Link to="/view-tickets" className="text-orange-500 hover:underline">&larr; Back to Tickets</Link>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-orange-600">{ticket.subject}</h1>
        <div className="mb-4">
          <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full mr-2">{ticket.status}</span>
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{ticket.priority}</span>
        </div>
        <div className="mb-6">
          <p className="text-gray-700">{ticket.description}</p>
        </div>
        <div className="text-sm text-gray-500 mb-6">Created at: {ticket.createdAt}</div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">Close Ticket</Button>
      </div>
    </div>
  );
}