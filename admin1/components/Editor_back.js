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


import React, { useEffect, useRef } from "react";
export default function CKeditor_back({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const upload_image= process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // alert(process.env.NEXT_PUBLIC_API_URL);
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={{
            ckfinder:{
              uploadUrl:upload_image+'add/image',
              success:(res)=>{
                console.log(res);
              }
            }
          }
          }
          data={value}
          row="10"
          onChange={(event, editor) => {
            console.log(editor);
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}


//for image
