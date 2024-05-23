import {ChangeEvent, useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './style.css';

export default function TextEditor2() {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="weacsv6jeqrnamnnglfamvqcz1a9n5eq49fbnibo6miw956t"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="Nhập nội dung câu hỏi"
        init={{
          height: 200,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            // 'insertdatetime',
            'media',
            'table',
            // 'code',
            'help',
            'wordcount',
          ],
          toolbar:
            // 'undo redo | blocks | ' +
            'fontfamily fontsize |' +
            'bold italic forecolor underline strikethrough | alignleft aligncenter ' +
            'lineheight alignright alignjustify | bullist numlist |table link image charmap' +
            'removeformat | help | ',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          image_advtab: true,
          file_picker_types: 'file image media',
          file_picker_callback: (callback, value, meta) => {
            const input = document.createElement('input');
            // Provide file and text for the link dialog
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.addEventListener('change', (e: any) => {
              const file = e.target.files?.[0];

              const reader = new FileReader();
              reader.addEventListener('load', () => {
                /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
                const id = 'blobid' + new Date().getTime();
                // const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                // const base64 = reader?.result?.split(',')[1];
                // const blobInfo = blobCache.create(id, file, base64);
                // blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                // callback(blobInfo.blobUri(), {title: file.name});
              });
              reader.readAsDataURL(file);
            });

            // Provide image and alt text for the image dialog
            // if (meta.filetype == 'image') {
            //   callback('myimage.jpg', {alt: 'My alt text'});
            // }

            // // Provide alternative source and posted for the media dialog
            // if (meta.filetype == 'media') {
            //   callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
            // }
          },
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
