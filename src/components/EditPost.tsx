"use client"

import { DeltaType, Editor, useEditor } from "@wellspr/react-quill-editor";
import { useCallback, useEffect, useState } from "react";
import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { Post } from "@/types/post";

const EditPost = ({ postId }: { postId: string }) => {
    const { content } = useEditor();
    const [title, setTitle] = useState("");
    const [initialValue, setInitialValue] = useState<DeltaType>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`/api/post/${postId}`)
            .then(r => r.json())
            .then((post: Post) => {
                console.log("POST: ", post);
                setTitle(post.title);
                setInitialValue(post.content);
            })
            .catch(err => console.log(err));
    }, [postId]);

    const saveChanges = useCallback(() => {
        setLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", JSON.stringify(content.delta));

        const url = `/api/post/${postId}/edit`;

        const options: RequestInit = {
            method: "PUT",
            body: formData
        };

        fetch(url, options)
            .then(r => r.json())
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, [title, content, postId]);

    return (
        <div className="post-edit">
            <h2>Edit Page</h2>

            <div className="editor__title">
                <label htmlFor="editor-input" className="label">
                    Edit the title of your post:
                </label>
                    <input
                        id="editor-input"
                        className="input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title here..."
                    />
            </div>

            <label htmlFor="" className="label">Edit the post content below:</label>

            <Editor height={350} initialValue={initialValue} />

            <div className="editor__options">
                <button
                    onClick={saveChanges}
                    className="button editor__options__button editor__options__button--save"
                >
                    <span>{loading ? "Saving..." : "Save"}</span>
                </button>
            </div>
        </div>
    );
};

export default EditPost;