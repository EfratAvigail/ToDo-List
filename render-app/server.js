

const express = require('express');
const axios = require('axios'); // נשתמש ב-Axios כדי לקרוא ל-API של Render
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint של GET
app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': "rnd_BUpWyx2rhSToma0CErTw1zTEC0rs" // החלף ב-API Key שלך
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
