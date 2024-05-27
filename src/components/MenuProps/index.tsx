import React from 'react';

export interface MenuProps {
  items: {
    key: any;
    label: React.ReactNode;
    onClick?: () => void;
  }[];
}
