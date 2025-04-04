import {v2 as cloudinary} from 'cloudinary';


const uploadImage = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    try {
        // Upload the image to Cloudinary
        if(!filePath) {
            console.error('No file path provided for upload');
            return null;
        }
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image',
        });
        console.log('Image uploaded successfully:', result);
        return result.secure_url; // Return the secure URL of the uploaded image
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return null; // Return null in case of an error

    }
}

export default uploadImage;
