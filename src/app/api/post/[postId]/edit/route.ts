import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { apiBaseUrl, getObjectFromFormData, headers } from "@/app/api/utils";

export async function PUT(request: NextRequest, { params }: { params: { postId: string } }) {
    const formData = await request.formData();

    const data = getObjectFromFormData(formData);

    const url = `${apiBaseUrl}/post/${params.postId}`;

    const r = await axios({
        url,
        method: "put",
        headers: headers,
        data: data,
    });

    return NextResponse.json(r.data);
};
