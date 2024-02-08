import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Write"
};

export default function CreatePageLayout({ children }: { children: React.ReactNode }) {
    return <div className="create">
        {children}
    </div>
};
