'use client';
import React, {useState, useMemo} from 'react';
import dynamic from 'next/dynamic';
import {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './TextEditor.css';
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

export default function TextEditor({placeholder}: {placeholder: string}) {
  const [value, setValue] = useState('');

  const [content, setContent] = useState('');
  // let Size = Quill.import('formats/size');
  // Quill.register(Size, true);

  // Size.whitelist = ['8px', '10px', '12px', '14px', '16px', '18px'];

  const modules = {
    toolbar: [
      [{font: []}],
      [{size: ['small', false, 'large', 'huge']}], // custom dropdown
      ['bold', 'italic', 'underline', 'strike'],
      [{color: []}, {background: []}],
      [{script: 'sub'}, {script: 'super'}],
      [{align: []}],
      // [{header: [1, 2, false]}],
      // superscript / subscript
      [{indent: '-1'}],
      [{indent: '+1'}],
      //custom button values
      [{list: 'ordered'}, {list: 'bullet'}],
      ['link', 'color', 'image'],
      ['blockquote'],
      ['clean'],
    ],
  };
  const formats = [
    'color',
    'background',
    'size',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'align',
    'list',
    'script',
    'bullet',
    'link',
    'indent',
    'image',
    'color',
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <div>
      <div className=" mt-3 flex flex-col w-full min-h-[160px]">
        <ReactQuill
          value={content}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          theme="snow"
          className="  w-full "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
