import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Bell, User, Plus, List, Home, Settings } from "lucide-react";

console.log("DASHBOARD COMPONENT LOADED");

export default function UserDashboard() {
  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate AI reply
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "I'm just a demo bot. Please describe your issue!" }
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-100 via-green-200 to-white">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg px-6 py-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-green-600 font-bold text-2xl">Tokopedia HelpDesk</span>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded transition">
            <Home className="h-5 w-5" /> Dashboard
          </Link>
          <Link to="/view-tickets" className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded transition">
            <List className="h-5 w-5" /> Requests
          </Link>
          <Link to="/my-details" className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded transition">
            <Settings className="h-5 w-5" /> My Details
          </Link>
        </nav>
        <div className="mt-auto flex items-center gap-3 pt-10 border-t">
          <img src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff" alt="User" className="h-10 w-10 rounded-full" />
          <div>
            <div className="font-semibold text-gray-700">John Doe</div>
            <div className="text-xs text-gray-400">john.doe@email.com</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-10">
          <div className="md:hidden flex items-center gap-2">
            <span className="text-green-600 font-bold text-xl">Tokopedia HelpDesk</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" className="text-gray-600 hover:bg-green-50">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:bg-green-50">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <main className="flex-1 pt-10 px-6 pb-8 max-w-3xl mx-auto w-full">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-green-700">Welcome to Tokopedia HelpDesk</h1>
            <p className="text-lg text-gray-600 mb-6">How can we help you?</p>
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search requests, templates, and tickets"
                className="w-full px-6 py-4 rounded-full text-gray-800 shadow border border-green-200"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link to="/create-ticket">
              <Button className="bg-green-500 text-white hover:bg-green-600 shadow-lg flex items-center gap-2 px-6 py-3">
                <Plus className="h-5 w-5" /> Create an issue
              </Button>
            </Link>
          </div>

          {/* Summary Card */}
          <Card className="rounded-xl shadow-xl border border-green-200 max-w-md mx-auto">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-green-700">My Summary</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-500">7</span>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-500">4</span>
                  <span className="text-sm text-gray-600">On Hold</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-500">15</span>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        {/* AI Chatbot Floating Button and Window */}
        <div className="fixed bottom-6 right-6 z-50">
          {chatOpen ? (
            <div className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col">
              <div className="bg-green-500 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
                <span>AI Helpdesk Chat</span>
                <button onClick={() => setChatOpen(false)} className="text-white font-bold">×</button>
              </div>
              <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-green-100 ml-auto text-right"
                        : "bg-gray-100 text-left"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="p-2 border-t flex gap-2">
                <input
                  className="flex-1 border rounded px-2 py-1 text-sm"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            <button
              onClick={() => setChatOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl"
              aria-label="Open chat"
            >
              💬
            </button>
          )}
        </div>
      </div>
    </div>
  );
}