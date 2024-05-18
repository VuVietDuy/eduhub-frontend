'use client';
import React, {useState} from 'react';
import Post from './Post';
import ModalDetail from './ModalDetail';

export default function Info() {
  return (
    <div className="p-6">
      <h3 className="text-3xl mb-4 font-bold text-blue-900">Lớp 10A1</h3>
      <Post></Post>
      <ModalDetail></ModalDetail>
    </div>
  );
}
