// ייבוא המודולים הדרושים
const express = require('express'); // ייבוא Express
const axios = require('axios'); // ייבוא Axios

const app = express(); // יצירת מופע של Express
const PORT = process.env.PORT || 3000; // הגדרת הפורט

// Endpoint שמחזיר את רשימת האפליקציות
app.get('/apps', async (req, res) => {
    try {
        // שליחת בקשה ל-API של Render
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `rnd_BUpWyx2rhSToma0CErTw1zTEC0rs` // החלף ב-API Key שלך
            }
        });
        // החזרת התגובה בפורמט JSON
        res.json(response.data);
    } catch (error) {
        console.error(error); // הדפסת השגיאה לקונסולה
        res.status(500).json({ message: 'Error fetching apps' }); // החזרת שגיאה ללקוח
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // הודעה על הפעלת השרת
});
