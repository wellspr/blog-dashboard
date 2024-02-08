"use client"

import { Post } from "@/types/post";
import { DeltaType, Editor } from "@wellspr/react-quill-editor";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ViewPost = ({ postId }: { postId: string }) => {
    const [initialValue, setInitialValue] = useState<DeltaType>();
    const [title, setTitle] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/post/${postId}`)
            .then(r => r.json())
            .then((post: Post) => {
                console.log("POST: ", post);
                setTitle(post.title);
                setInitialValue(post.content);
            })
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, [postId]);

    return (
        <div className="post">
            { loading && <Loading /> }
            <h2>{title}</h2>

            <Editor height={"calc(100vh - 12rem)"} initialValue={initialValue} />
        </div>
    );
}

export default ViewPost;