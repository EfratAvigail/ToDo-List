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

  addTask: async (name) => {
    console.log('addTask', name);
    try {
      const result = await axios.post(`${apiUrl}/items`, { name, isComplete: false });
      return result.data;
    } catch (err) {
      console.error("Error adding task:", err);
      throw err; // זרוק את השגיאה
    }
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    try {
      const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
      return result.data;
    } catch (err) {
      console.error("Error updating task:", err);
      throw err; // זרוק את השגיאה
    }
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
