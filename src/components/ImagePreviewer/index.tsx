import React from "react";
import { ImageViewer } from "./styled";

interface ImagePreviewerComponentProps {
  url?: string;
}

export const ImagePreviewerComponent: React.FC<
  ImagePreviewerComponentProps
> = ({ url }) => {
  return (
    <>
      <ImageViewer src={url} />
    </>
  );
};
