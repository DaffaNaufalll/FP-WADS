import React from "react";
import { Button } from "../ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-600">
      <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-10 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="https://ui-avatars.com/api/?name=IT+ServiceDesk" alt="Logo" className="h-16 w-16 rounded-full" />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">IT ServiceDesk Login</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">Login</Button>
        </form>
      </div>
    </div>
  );
}