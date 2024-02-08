"use client"

import { EditorProvider } from "@/components/EditorProvider";

export default function CreatePageTemplate({ children }: { children: React.ReactNode }) {
    return (
        <EditorProvider>
            {children}
        </EditorProvider>
    );
};
