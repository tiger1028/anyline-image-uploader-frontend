import React, { ChangeEvent, useRef } from "react";
import { FileSelectInput, UploadButton } from "./style";

interface ImageSelectorComponentProps {
  onSelect: (imageUrl: string, image: File) => void;
}

export const ImageSelectorComponent: React.FC<ImageSelectorComponentProps> = ({
  onSelect,
}) => {
  const hiddenFileInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onSelectClicked = () => {
    hiddenFileInput.current.click();
  };

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    if (file) {
      onSelect(URL.createObjectURL(file), file);
    }
  };

  return (
    <>
      <UploadButton onClick={onSelectClicked}>Select a file</UploadButton>
      <FileSelectInput
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={onImageSelect}
        ref={hiddenFileInput}
      />
    </>
  );
};
