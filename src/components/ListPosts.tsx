"use client"

import { useEffect, useState } from "react";
import PostOptions from "./PostsOptions";
import Loading from "./Loading";
import { Post } from "@/types/post";

const ListPosts = () => {

    const [items, setItems] = useState<Post[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!items) {
            fetch("/api/posts")
                .then(r => r.json())
                .then(r => setItems(r.items))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [items]);

    const listItems = items && items.map(item => {
        return <>
            <div key={item.key} className="posts__list__item">
                <h3 className="posts__list__item__title">{item.title}</h3>
                <p className="posts__list__item__date posts__list__item__date--created">
                    <span className="label">Created: </span>
                    <span className="value">{new Date(item.createdAt).toLocaleDateString()}</span>
                </p>
                {
                    item.updatedAt &&
                    <p className="posts__list__item__date posts__list__item__date--updated">
                        <span className="label">Last updated: </span>
                        <span className="value">{new Date(item.updatedAt).toLocaleDateString()}</span>
                    </p>
                }

                <PostOptions postId={item.key} />
            </div>
            <hr />
        </>
    });

    const emptyList = <div className="empty">There are no posts yet!</div>;

    const postsList = () => {
        return (
            <div className="posts__list">
                <h2>Posts</h2>

                {items && items.length === 0 && emptyList}
                {loading ? <Loading /> : listItems}
            </div>
        );
    };

    return postsList();
};

export default ListPosts;