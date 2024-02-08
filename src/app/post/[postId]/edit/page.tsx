import EditPost from "@/components/EditPost";

export default function EditPage({ params }: { params: { postId: string } }) {
    return <EditPost postId={params.postId} />;
};
