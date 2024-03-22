'use client'

import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <div className="flex gap-1">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={() => signOut()}>Выход</button>
        </div>
    )
}