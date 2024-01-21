"use client";
import input from "postcss/lib/input";
import React from "react";
import { useDropzone } from "react-dropzone";

type Props = {};

const FileUpload = (props: Props) => {
    const {getRootProps, getInputProps}=useDropzone();

  return (
    <div className='p-2 bg-white rounded-xl'>
      <div {...getRootProps({
        className:'border-dashed border-2 rounded-xl cursor-pointer'
      })}>
        <input {...getInputProps()} />
      </div>
    </div>
  );
};

export default FileUpload;
