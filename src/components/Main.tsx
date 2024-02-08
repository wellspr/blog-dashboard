import React from "react"

export const Main = ({ children }: { children: React.ReactNode }) => {
    return <main className="app-main">
        { children }
    </main>
}