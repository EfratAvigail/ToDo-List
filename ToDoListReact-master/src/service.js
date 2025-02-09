import axios from 'axios';

const apiUrl =process.env.REACT_APP_URL; // כתובת ה-API

// הוספת אינטרספטור לטיפול בשגיאות
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

const api = {
  getTasks: async () => {
    try {
      const result = await axios.get(`${apiUrl}/items`);
      return result.data;
    } catch (err) {
      console.error("Error fetching tasks:", err);
      throw err; // חשוב לזרוק את השגיאה כדי שהקומפוננטות יכולות לטפל בהן
    }
  },

  addTask: async(name) => {
    console.log('addTask', name);
    try {
        const result = await axios.post('/items', { name });
        return result.data;
    } catch (error) {
        console.error("Error adding task:", error.message);
        throw error; // זרוק את השגיאה כדי שתוכל לטפל בה במקום אחר
    }
},

setCompleted: async (id, isComplete, name) => {
    await axios.put(`/items/${id}`, { name: name, isComplete: isComplete });
},

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    try {
      const result = await axios.delete(`${apiUrl}/items/${id}`);
      return result.data;
    } catch (err) {
      console.error("Error deleting task:", err);
      throw err; // זרוק את השגיאה
    }
  }
};

export default api;
