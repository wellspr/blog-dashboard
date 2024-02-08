import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Posts",
    description: "All posts"
}

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="posts">{ children }</div>
    );
}