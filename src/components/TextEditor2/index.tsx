'use client';

import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './textEditor2.css';

export default function TextEditor2({
  questionOrder,
  value,
  setValue,
  initialValue,
  answerOrder,
}: {
  questionOrder?: number;
  value: any;
  setValue: any;
  answerOrder?: number;
  initialValue?: string;
}) {
  const editorRef = useRef<any>(null);

  return (
    <>
      <Editor
        apiKey="weacsv6jeqrnamnnglfamvqcz1a9n5eq49fbnibo6miw956t"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        value={value}
        onEditorChange={(newValue, editor) => {
          if (questionOrder) {
            setValue(newValue);
          } else {
            if (answerOrder) {
              const order = answerOrder;
              setValue((value: any) => ({
                ...value,
                [order]: {order: order, value: newValue},
              }));
            }
          }
        }}
        init={{
          encoding: 'utf-8',
          width: '100%',
          height: 150,
          menubar: false,
          plugins: [
            // 'advlist',
            'autolink',
            'lists',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            // 'visualblocks',
            'code',
            'fullscreen',
            // 'insertdatetime',
            'media',
            'table',
            // 'code',
            'help',
            // 'wordcount',
          ],
          toolbar:
            // 'undo redo | blocks | ' +
            'fontfamily fontsize |' +
            'bold italic forecolor underline charmap | alignleft aligncenter ' +
            ' alignright alignjustify | lineheight | bullist numlist |table  ' +
            '||' +
            'removeformat fullscreen preview help',
          content_style:
            'body { font-family:Times New Roman ,Arial,sans-serif; font-size:16px }',
        }}
      />

      {/* <div className="preview">
        <div className="" dangerouslySetInnerHTML={{__html: value}} />
      </div> */}
    </>
  );
}
