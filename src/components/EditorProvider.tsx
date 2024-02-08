"use client"

import dynamic from "next/dynamic";
import React, { FC } from "react"

const Provider = dynamic(() =>
    import("@wellspr/react-quill-editor").then(m => m.Provider),
    { ssr: false }
);

export const EditorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Provider config={{
            options: {
                theme: "snow",
                placeholder: "Write a great post!",
                modules: {
                    //toolbar: "#toolbar"
                    toolbar: [
                        //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                        
                        ['blockquote', 'code-block'],
                      
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                        //[{ 'direction': 'rtl' }],                         // text direction
                      
                        //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown  
                      
                        //[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                        //[{ 'font': [] }],
                        [{ 'align': [] }],
                      
                        ['clean']                                         // remove formatting button
                      ]
                }
            }
        }}>
            {children}
        </Provider>
    );
};

export const ViewerProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Provider config={{
            options: {
                theme: "snow",
                modules: {
                    toolbar: null
                },
                placeholder: "",
                readOnly: true,
            }
        }}>
            {children}
        </Provider>
    );
};
