import axios from "axios";

export const submitLead = async (data) => {
  await axios.post("/api/crm", data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "",
    },
  });

  await axios.post(`${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/send-email`, data);
};
