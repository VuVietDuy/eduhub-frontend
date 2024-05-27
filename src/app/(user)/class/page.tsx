'use client';
import ClassCard from '@/components/ClassCard';
import {RootState} from '@/redux/store';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Class() {
  return (
    <div className="flex flex-wrap gap-6 p-6 m-auto">
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/math.jpg"
        subject="Toán"
        teacher="Vũ Viết Duy"
        notification={1}
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/chemistry.jpg"
        subject="Ngữ văn"
        teacher="Vũ Viết Duy"
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/english.jpg"
        subject="Tiếng anh"
        teacher="Trần Tuấn Linh"
        notification={3}
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/chemistry.jpg"
        subject="Hoá học"
        teacher="Đỗ Văn Đạt"
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/physics.jpg"
        subject="Vật lý"
        teacher="Trần Xuân Lâm"
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/technology.jpg"
        subject="Tin học"
        teacher="Vũ Viết Duy"
      ></ClassCard>
      <ClassCard
        link={'class/math/assignment'}
        img="/subjectsImgs/biology.jpg"
        subject="Sinh học"
        teacher="Vũ Viết Duy"
      ></ClassCard>
    </div>
  );
}
