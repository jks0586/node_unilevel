// import React, { useEffect, useRef } from "react";
// export default function CKeditor({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef();
//   const { CKEditor, ClassicEditor } = editorRef.current || {};

//   const upload= process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     // alert(process.env.NEXT_PUBLIC_API_URL);
//     editorRef.current = {
//       CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
//       ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//     };
//   }, []);
//   return (
//     <>
//       {editorLoaded ? (
//         <CKEditor
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           config={{
//             ckfinder:{
//               uploadUrl:{upload}
//             }
            
//           }}
//           data={value}
//           row="10"
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             onChange(data);
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </>
//   );
// }


// import React, { useEffect, useRef } from "react";
// export default function CKeditor({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef();
//   const { CKEditor, ClassicEditor } = editorRef.current || {};
//   const upload_image= process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     // alert(process.env.NEXT_PUBLIC_API_URL);
//     editorRef.current = {
//       CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
//       ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//     };
//   }, []);
//   return (
//     <>
//       {editorLoaded ? (
//         <CKEditor
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           config={{
//             ckfinder:{
//               uploadUrl:upload_image+'add/image',
//               success:(res)=>{
//                 console.log(res);
//               }
//             }
//           }
//           }
//           data={value}
//           row="10"
//           onChange={(event, editor) => {
//             console.log(editor);
//             const data = editor.getData();
//             onChange(data);
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </>
//   );
// }


//for image
import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Editor = ({
  value,
  onChange,
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      
      config={ {
        // toolbar,
        removePlugins: ["MediaEmbedToolbar"]
    } }
    />
  );
};

export default Editor;