import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { apiBaseUrl, getObjectFromFormData, headers } from "../utils";

const url = `${apiBaseUrl}/posts`;

export async function GET(request: NextRequest) {

    const r = await axios({
        url, 
        method: "get",
        headers: headers,
    });

    return NextResponse.json(r.data);
};

export async function POST(request: NextRequest) {

    const formData = await request.formData();

    const data = getObjectFromFormData(formData);

    console.log(data);

    const r = await axios({
        url, 
        method: "post",
        headers: headers,
        data: data
    });
        
    return NextResponse.json(r.data);
};
