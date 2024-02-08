"use client"

import Link from "next/link";
import { useCallback } from "react";

interface PropsType {
    postId: string;
}

const PostOptions: React.FC<PropsType> = ({ postId }) => {

    const deleteItem = useCallback((key: string) => {
        fetch(`/api/post/${key}/delete`, {
            method: "delete"
        })
            .then(r => r.json())
            .then(r => location.reload());
    }, []);

    return (
        <div className="posts__options">
            <Link href={`/post/${postId}`} className="button posts__options__link">Read post</Link>
            <Link href={`/post/${postId}/edit`} className="button posts__options__link">Edit post</Link>
            <button className="button posts__options__link" onClick={() => deleteItem(postId)}>Delete Post</button>
        </div>
    );
};

export default PostOptions;