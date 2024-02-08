import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { apiBaseUrl, headers } from "@/app/api/utils";


export async function DELETE(request: NextRequest, { params }: { params: { postId: string } }) {

    const url = `${apiBaseUrl}/post/${params.postId}`;

    const r = await axios({
        url,
        method: "delete",
        headers: headers,
    });

    return NextResponse.json(r.data);
};
