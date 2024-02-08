"use client"

import { Editor, useEditor } from "@wellspr/react-quill-editor";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const { content } = useEditor();

    const router = useRouter();

    const savePost = useCallback(() => {
        setLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", JSON.stringify(content.delta));

        fetch("/api/posts", {
            method: "POST",
            body: formData
        })
            .then(r => r.json())
            .then(r => {
                console.log(r);
                router.push("/posts");
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [title, content, router]);

    return (
        <div className="editor">
            <h2>Create Post</h2>

            <div className="editor__title">
                <label htmlFor="editor-input" className="label">
                    Create a title for your post:
                </label>
                <input
                    id="editor-input"
                    className="input"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Give your post a title"
                />
            </div>

            <label htmlFor="" className="label">Create the post content below:</label>

            <Editor height={350} />
            

            <div className="editor__options">
                <button
                    onClick={savePost}
                    className="button editor__options__button editor__options__button--save"
                >
                    <span>{loading ? "Saving..." : "Save"}</span>
                </button>
            </div>
        </div>
    );
};

export default CreatePost;