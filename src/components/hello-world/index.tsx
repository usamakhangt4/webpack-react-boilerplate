import React from 'react';
import './hello-world.css';

interface componentProps {
  title: string;
}

const HelloWorld = (props: componentProps) => {
  const { title } = props;
  // eslint-disable-next-line react/jsx-filename-extension
  return <div className="hello-world">{title}</div>;
};
export default HelloWorld;
