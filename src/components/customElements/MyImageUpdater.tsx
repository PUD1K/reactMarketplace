import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/redux';
import { imageSlice, uploadImage } from '../../store/reducers/other/ImageSlice';
import { localhost } from '../../variables/server';

interface MyImageUpdaterProps {
  onImageUpload: (image: Blob) => void;
  imageUrl: string;
}

const MyImageUpdater = ({ onImageUpload, imageUrl }: MyImageUpdaterProps) => {  
    const [imageSrc, setImageSrc] = useState<string | undefined>();
    const [image, setImage] = useState<Blob | null>(null);

    const handleFileChange = (event: FormEvent) => {
        const files = (event.target as HTMLInputElement).files;
        if(files?.length){
          setImage(files[0])
          onImageUpload(files[0])
        }
    };

    useEffect(() => {
      if (image) {
        setImageSrc(URL.createObjectURL(image));
      }
    }, [image]);
  
    return (
      <Form>
        {(imageSrc || imageUrl) && (
          <img src={imageUrl && !imageSrc ? `${localhost}/${imageUrl}` : imageSrc} alt='Выбранное изображение' width='400' height='460'  />
        )}
        <Form.Group>
          <Form.Label className='fs-5 mt-1'>Изображение</Form.Label>
          <Form.Control className='w-25' type='file' onChange={handleFileChange} />
        </Form.Group>
      </Form>
    );
};

export default MyImageUpdater;