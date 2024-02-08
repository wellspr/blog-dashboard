import Link from "next/link";
import ViewPost from "@/components/ViewPost";

export default function PostPage({ params }: { params: { postId: string } }) {

    return (
        <div className="post__view">
            <ViewPost postId={params.postId} />

            <div className="post__options">
                <Link
                    href={`/post/${params.postId}/edit`}
                    className="post__options__link"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};
