'use client';
import fetcher from '@/api/fetcher';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export default function SubjectManagement() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const deleteSubject = (subjectId: string) => {
    fetcher
      .delete(`api/subjects/${subjectId}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetcher
      .get('api/subjects')
      .then((data) => {
        console.log(data);
        setDataInit(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: 'id',
      width: '10px',
    },
    {
      title: 'Img',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      render: (data: any) => (
        <Image src={data.imgUrl} width={50} height={50} alt=""></Image>
      ),
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <>
          <button onClick={() => deleteSubject(data._id)}>Delete</button>
        </>
      ),
    },
  ];
  return (
    <Card>
      {dataInit ? (
        <Table dataSource={dataInit} columns={columns}></Table>
      ) : (
        <></>
      )}
    </Card>
  );
}
