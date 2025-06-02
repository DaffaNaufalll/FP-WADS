import React from "react";
import { Button } from "../ui/button";

export default function CreateTicket() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-10 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-orange-600">Create New Ticket</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700">Subject</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Description</label>
            <textarea className="w-full px-4 py-2 border rounded-md" rows={4} required />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Priority</label>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">Submit Ticket</Button>
        </form>
      </div>
    </div>
  );
}