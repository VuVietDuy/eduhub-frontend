import {ChangeEvent, useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
// import './App.css';

export default function TextEditor2({placeholder}: {placeholder: string}) {
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
        initialValue=""
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
            'lineheight alignright alignjustify | bullist numlist |table link image ' +
            '|charmap|' +
            'removeformat | help | ',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          image_advtab: true,
          file_picker_types: 'file image media',
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
