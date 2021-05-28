import React, { Fragment, FC } from 'react';
import { ISmartImage } from './ISmartImage';
const SmartImage: FC<ISmartImage.IProps> = ({
  imageFilePath,
  fullPath,
  className,
  alt
}) => {
  const imagesBaseHostUrl = process.env.REACT_APP_IMAGES_HOST_BASE_URL;
  return (
    <Fragment>
      {imageFilePath && (
        <img
          width="100%"
          loading="lazy"
          className={className}
          src={`${imagesBaseHostUrl}/w220_and_h330_face${imageFilePath}`}
          alt={alt}
        />
      )}
      {fullPath && (
        <img
          className={className}
          src={fullPath}
          width="100%"
          style={{
            objectFit: 'cover',
            maxWidth: '220px',
            maxHeight: '330px'
          }}
          alt={alt}
        />
      )}
    </Fragment>
  );
};

export default SmartImage;
