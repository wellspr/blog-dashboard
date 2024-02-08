import { DeltaType } from "@wellspr/react-quill-editor";

export const headers = {
    "X-Blog-App-Key": String(process.env.X_Blog_App_Key),
    "X-Space-App-Key": String(process.env.X_Space_App_Key)
};

export const apiBaseUrl = process.env.API_BASE_URL;

export const getObjectFromFormData = (formData: FormData) => {

    const title = String(formData.get("title"));
    const content: DeltaType = JSON.parse(String(formData.get("content")));

    return { title, content};
};