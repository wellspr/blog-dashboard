import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Editing"
};

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <div className="post">
            { children }
        </div>
    );
};
