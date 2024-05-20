'use client';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import Modal from '@/components/Modal';
import TextEditor from '@/components/TextEditor';
import TextEditor2 from '@/components/TextEditor2';
import Image from 'next/image';
import React, {ChangeEvent, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';

export default function QuestionPartModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: any;
  setIsModalOpen: () => void;
}) {
  console.log('check: ', isModalOpen);
  return (
    <>
      <Modal
        title={isModalOpen.title}
        width="w-[40%]"
        height="h-[calc(100vh-40px)]]"
        open={isModalOpen.isOpen}
        onCancel={setIsModalOpen}
      ></Modal>
    </>
  );
}
