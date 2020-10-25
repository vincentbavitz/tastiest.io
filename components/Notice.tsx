import { CloseOutlined, WarningOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface Props {
  title: string;
  type: 'info' | 'warning';
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  isVisible?: boolean;
  onClose?(): void;
}

export function Notice(props: Props) {
  const { title, type, children, className, onClose } = props;
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(props.isVisible ?? true);

  const Pointer = styled.div`
    height: 0.5rem;
    width: 0.725rem;
    top: -0.49rem;
    right: 15%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  `;

  const NoticeContainer = styled.div`
    z-index: 1001;
  `;

  const icon =
    type === 'warning' ? (
      <WarningOutlined className="text-white ml-2" />
    ) : (
      <></>
    );

  // Close behaviour
  const handleOnClose = () => {
    setIsVisible(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <NoticeContainer
      className={classNames(
        'absolute mt-6 p-4 rounded-md shadow-md bg-secondary text-white w-9/10 inset-auto',
        isVisible ? 'block' : 'hidden',
        className,
      )}
    >
      <Pointer className={classNames('absolute bg-secondary')}></Pointer>

      <div className="flex justify-between items-center mb-2">
        <span className="flex text-lg items-center mb-1">
          {title} {icon}
        </span>
        <CloseOutlined onClick={handleOnClose} className="outline-none" />
      </div>

      {children}
    </NoticeContainer>
  );
}
