const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint שמחזיר את רשימת האפליקציות
app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://render-app-u4bx.onrender.com', {
            headers: {
                'Authorization': `rnd_BUpWyx2rhSToma0CErTw1zTEC0rs` // החלף ב-API Key שלך
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching apps' });
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
