'use client';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import React, {use, useState} from 'react';

export default function Componets() {
  fetch(
    'http://localhost:8000/api/quizzes/66064244a5dc22ee776616d3/questions?sort_by=level',
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  return (
    <div>
      <Avatar isDotIndicator={true}></Avatar>
      <Button type="primary">Primary</Button>
    </div>
  );
}
