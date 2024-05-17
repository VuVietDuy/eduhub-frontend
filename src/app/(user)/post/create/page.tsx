'use client';
import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import {useState} from 'react';
import './create.scss';
const options = ['Art', 'Science', 'Technology', 'Cinema', 'Design', 'Food'];
export default function CreatePost() {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" className="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Pushlish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" id="file" style={{display: 'none'}} />
          <label htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Saft a draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item1">
          {options.map((option) => (
            <div key={option} className="cat">
              <input type="radio" id="option" name="cat" />
              <label className="file" htmlFor="option">
                {option}
              </label>
            </div>
          ))}

          {/* <input type="radio" name="cat" value={"art"} id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" value={"science"} id="science" />
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" value={"technology"} id="technology" />
          <label htmlFor="technology">Technology</label>
          <input type="radio" name="cat" value={"cinenma"} id="cinenma" />
          <label htmlFor="cinenma">Cinenma</label>
          <input type="radio" name="cat" value={"design"} id="design" />
          <label htmlFor="design">Design</label>
          <input type="radio" name="cat" value={"food"} id="food" />
          <label htmlFor="food">Food</label> */}
        </div>
      </div>
    </div>
  );
}
