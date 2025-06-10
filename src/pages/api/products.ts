import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Use the public directory inside the project
    const ksfjewelPath = path.join(process.cwd(), 'public', 'KSFJEWEL');
    const folders = fs.readdirSync(ksfjewelPath);

    const products = folders.map(folder => {
      const folderPath = path.join(ksfjewelPath, folder);
      const files = fs.readdirSync(folderPath);
      
      const images = files
        .filter(file => file.startsWith('I_'))
        .map(file => `/KSFJEWEL/${folder}/${file}`);
      
      const videos = files
        .filter(file => file.startsWith('V_'))
        .map(file => `/KSFJEWEL/${folder}/${file}`);

      // Use the first image as preview, or a placeholder if no images
      const previewImage = images[0] || '/placeholder-image.jpg';

      return {
        id: folder,
        name: folder.replace(/_/g, ' '), // Convert folder name to display name
        previewImage,
        totalItems: images.length + videos.length,
        images,
        videos
      };
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error reading KSFJEWEL directory:', error);
    res.status(500).json({ message: 'Error loading products' });
  }
} 