import React from 'react';
import classNames from 'classnames';
import toast from 'react-hot-toast';
import {MdOutlineClose} from 'react-icons/md';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';

export const notification = {
  success: ({message, description}: {message?: string; description?: string}) =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            'notificationWrapper',
            t.visible ? 'top-0' : '-top-96',
          ])}
        >
          <div className={'iconWrapper'}>
            <CheckCircleFilled className="text-green-500" />
          </div>
          <div className={'contentWrapper'}>
            <h1>{message}</h1>
            <p>{description}</p>
          </div>
          <div className={'closeIcon'} onClick={() => toast.dismiss(t.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      {id: 'unique-notification', position: 'top-center'},
    ),
  error: ({message, description}: {message?: string; description?: string}) =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            'notificationWrapper',
            t.visible ? 'top-0' : '-top-96',
          ])}
        >
          <div className={'iconWrapper'}>
            <CloseCircleFilled className="text-red-500" />
          </div>
          <div className={'contentWrapper'}>
            <h1>{message}</h1>
            <p>{description}</p>
          </div>
          <div className={'closeIcon'} onClick={() => toast.dismiss(t.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      {id: 'unique-notification', position: 'top-center'},
    ),
  warning: ({message, description}: {message?: string; description?: string}) =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            'notificationWrapper',
            t.visible ? 'top-0' : '-top-96',
          ])}
        >
          <div className={'iconWrapper'}>
            <ExclamationCircleFilled className="text-yellow-500" />
          </div>
          <div className={'contentWrapper'}>
            <h1>{message}</h1>
            <p>{description}</p>
          </div>
          <div className={'closeIcon'} onClick={() => toast.dismiss(t.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      {id: 'unique-notification', position: 'top-center'},
    ),
  info: ({message, description}: {message?: string; description?: string}) =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            'notificationWrapper',
            t.visible ? 'top-0' : '-top-96',
          ])}
        >
          <div className={'iconWrapper'}>
            <ExclamationCircleFilled className="text-blue-500" />
          </div>
          <div className={'contentWrapper'}>
            <h1>{message}</h1>
            <p>{description}</p>
          </div>
          <div className={'closeIcon'} onClick={() => toast.dismiss(t.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      {id: 'unique-notification', position: 'top-center'},
    ),
};
