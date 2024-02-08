import { DeltaType } from "@wellspr/react-quill-editor"

export type Post = { 
    key: string, 
    title: string, 
    content: DeltaType,
    createdAt: number,
    updatedAt: number,
    deleted: boolean
}