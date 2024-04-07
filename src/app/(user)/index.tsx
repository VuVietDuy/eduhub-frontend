import Paragraph from '@/components/Paragraph';
import React from 'react';
import {MdArrowRight} from 'react-icons/md';

interface IProps {
  thumnailUrl: string;
  title: string;
  description: string;
  pushlishedAt: string;
  tag: string[];
}

export default function PostListItem(props: IProps) {
  const {thumnailUrl, title, description, pushlishedAt, tag} = props;
  return (
    <div className="sm:flex">
      <img
        src={thumnailUrl}
        className="w-full h-fit
         sm:w-32 sm:h-28"
        alt="Thumnail"
      />
      <div className="flex ">
        <div>
          <h3>{title}</h3>
          <Paragraph>{description}</Paragraph>
        </div>
        <div>
          <h3>{pushlishedAt}</h3>
          <a>
            Xem thêm <MdArrowRight></MdArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
}
