import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { apiBaseUrl, headers } from "../../utils";


export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
    const url = `${apiBaseUrl}/post/${params.postId}`;

    const r = await axios({
        url,
        method: "get",
        headers: headers,
    });

    return NextResponse.json(r.data);
};
