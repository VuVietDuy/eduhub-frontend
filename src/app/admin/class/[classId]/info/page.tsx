'use client';
import Card from '@/components/Card';
import React, {useState} from 'react';
import Post from './Post';
import {Formik} from 'formik';
import {init} from 'next/dist/compiled/webpack/webpack';
import Detail from './ModalDetail';
import Icon from '@ant-design/icons/lib/components/Icon';
import {EditOutlined} from '@ant-design/icons';
import ModalDetail from './ModalDetail';

export default function Info() {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="">
      <Card className="m-6 ">
        <Post></Post>

        <ModalDetail></ModalDetail>
      </Card>
    </div>
  );
}
