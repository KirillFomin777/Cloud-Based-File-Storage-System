import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('/upload', formData, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Upload failed');
        }
    };

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadFile}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
