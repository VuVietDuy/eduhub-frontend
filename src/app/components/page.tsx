'use client';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import React from 'react';

export default function Componets() {
  return (
    <div>
      <Avatar isDotIndicator={true}></Avatar>
      <Button type="primary">Primary</Button>
      <Modal open={true} title="Modal">
        Modal
      </Modal>
    </div>
  );
}
