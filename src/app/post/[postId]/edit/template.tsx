"use client"

import { EditorProvider } from "@/components/EditorProvider";

export default function EditPostTemplate ({ children }: { children: React.ReactNode }) {

    return (
        <EditorProvider>
            { children }
        </EditorProvider>
    );
};