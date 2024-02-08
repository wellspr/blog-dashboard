export const dynamic = "force-dynamic";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reading post"
};

export default function EditPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>{children}</div>
    );
};