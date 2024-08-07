import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ImagePreviewerComponent, ImageSelectorComponent } from "./components";
import "react-toastify/dist/ReactToastify.css";
import {
  FlexContainer,
  Container,
  UploadButton,
  GridContainer,
  Title,
  OCRDataViewer,
  ButtonsContainer,
} from "./App.style";

export const App: React.FC = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [ocrData, setOcrData] = useState<string>("");

  const onImageSelect = (imageUrl: string, image: File) => {
    setSelectedImageUrl(imageUrl);
    setSelectedImage(image);
  };

  const onUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      setOcrData("");

      const response = await fetch(
        "http://localhost:8000/api/v1/images/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        setOcrData(data);
      } else {
        const { message } = await response.json();
        toast.error(message, {
          autoClose: 1500,
        });
      }
    }
  };

  return (
    <Container>
      <GridContainer>
        <ButtonsContainer>
          <ImageSelectorComponent onSelect={onImageSelect} />
          <UploadButton onClick={onUpload} disabled={!selectedImage}>
            Upload
          </UploadButton>
        </ButtonsContainer>

        <FlexContainer>
          <GridContainer>
            <Title>Image Preview</Title>
            <ImagePreviewerComponent url={selectedImageUrl} />
          </GridContainer>

          <GridContainer>
            <Title>OCR Data</Title>
            <OCRDataViewer>{ocrData}</OCRDataViewer>
          </GridContainer>
        </FlexContainer>
      </GridContainer>

      <ToastContainer />
    </Container>
  );
};
