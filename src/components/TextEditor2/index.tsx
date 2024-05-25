'use client';

import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './textEditor2.css';
import {IAnswer} from '@/redux/types/question.type';

export default function TextEditor2({
  value,
  setValue,
  initialValue,
  answerOrder,
  category,
}: // onChange,
{
  questionOrder?: number;
  value: string;
  setValue: any;
  answerOrder?: number;
  initialValue?: string;
  category: string;
  // onChange?: any;
}) {
  const editorRef = useRef<any>(null);
  return (
    <>
      <Editor
        apiKey="weacsv6jeqrnamnnglfamvqcz1a9n5eq49fbnibo6miw956t"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        value={value}
        onEditorChange={
          (newValue, editor) => {
            if (category === 'answer') {
              const index = answerOrder;
              setValue((prevState: any) => {
                let newState = prevState;
                console.log('check newState', newState);

                // newState?.map((item: any) => {
                //   if (item.id === index) {
                //     item.content = newValue;
                //   }
                // });
                return newState;
              });
              console.log('check value: ', value);
            } else {
              setValue(newValue);
              console.log('hello');
              console.log('check value: ', value);
            }
          }
          // }
          // onChange
        }
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
            'blocks fontfamily fontsize |' +
            'bold italic forecolor underline charmap | alignleft aligncenter ' +
            ' alignright alignjustify | lineheight | bullist numlist |table  ' +
            '||' +
            'removeformat fullscreen preview help',
          content_style:
            'body { font-family:Times New Roman ,Arial,sans-serif; font-size:16px }',
        }}
      />

      <div className="">
        <div className="markdown" dangerouslySetInnerHTML={{__html: value}} />
      </div>
    </>
  );
}
