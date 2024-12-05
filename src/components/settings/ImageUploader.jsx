import React, { useState } from "react";

const ImageUploader = ({image,setImage, w, h, updateImage}) => {

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            try{
                updateImage(file);
            }
            catch{
                return
            }         
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-row items-center justify-center overflow-auto">
            <label className="bg-lightButton dark:bg-darkButton text-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-600 active:scale-95">
                Upload Image
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </label>
            {image && (
                <div className={` rounded-lg overflow-hidden ml-10`}
                style={{ width: `${w}rem`, height: `${h}rem` }}
                >
                    <img
                        src={image}
                        alt="Uploaded Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
