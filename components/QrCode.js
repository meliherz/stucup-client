import React from 'react';
import { useQRCode } from 'next-qrcode';

function QrCode() {
  const { Image } = useQRCode();

  return (
    <Image
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'L',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#0000',
          light: '#FFFF',
        },
      }}
    />
  );
}

export default QrCode;