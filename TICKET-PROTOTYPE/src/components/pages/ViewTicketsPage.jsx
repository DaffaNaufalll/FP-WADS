import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

export default function ViewTickets() {
  // Replace with real data
  const tickets = [
    {
      id: 1,
      subject: "Unable to Login",
      status: "Open",
      priority: "High",
    },
    {
      id: 2,
      subject: "Payment Not Processed",
      status: "Pending",
      priority: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-8">My Tickets</h1>
        <div className="grid gap-6">
          {tickets.map((ticket) => (
            <Link key={ticket.id} to={`/ticket/${ticket.id}`}>
              <Card className="rounded-xl shadow-lg border border-orange-100 p-6 cursor-pointer hover:bg-orange-50 transition">
                <CardContent>
                  <h3 className="text-xl font-semibold">{ticket.subject}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">{ticket.status}</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{ticket.priority}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}