import React from 'react';

export interface ChildrenPropsTypes {
  children: React.ReactNode;
  cls?: string;
}

export interface CustomButtonPropsTypes {
  title: string;
  link?: string;
  cls?: string;
  currentStatus?: string;
  handleConvertImageToText?: string;
}

export interface CustomFileUploadPropsTypes {
  handleSingleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imgPreview?: Blob | MediaSource;
}
