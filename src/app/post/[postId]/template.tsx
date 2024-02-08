"use client"

import { ViewerProvider } from "@/components/EditorProvider";

export default function PostTemplate({ children }: { children: React.ReactNode }) {
    return (
        <ViewerProvider>
            {children}
        </ViewerProvider>
    );
};
