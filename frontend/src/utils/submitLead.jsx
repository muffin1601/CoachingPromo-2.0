import axios from "axios";

export const submitLead = async (data) => {
  await axios.post(import.meta.env.VITE_CRM_API_URL, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_CRM_API_KEY,
    },
  });

  await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, data);
};
