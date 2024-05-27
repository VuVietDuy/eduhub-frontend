'use client';
import React, {useEffect, useState} from 'react';
import Post from './Post';
import ModalDetail from './ModalDetail';
import {useDispatch} from 'react-redux';
import {setSegment} from '@/redux/slice/breadcrumd.slice';
import {IBreadcrumd} from '@/redux/types/breadcrumd.type';
import {fetcher} from '@/api/fetcher';

export default function Info({params}: {params: {classId: string}}) {
  const classId = params.classId;
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetcher
      .get(`/api/classes/${classId}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
        const breadcrum: IBreadcrumd = {
          segments: [response.data.data.classInfo.className],
        };
        dispatch(setSegment(breadcrum));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-6">
      <Post></Post>
      <ModalDetail></ModalDetail>
    </div>
  );
}
