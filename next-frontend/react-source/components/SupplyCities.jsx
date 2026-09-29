import React from "react";
import "../styles/SupplyCities.css";
import { Globe, MapPin } from "lucide-react";

const stateCityList = [
  { state: "Andhra Pradesh", cities: ["Vijayavada", "Vishakhapatnam"] },
  { state: "Assam", cities: ["Guwahati"] },
  { state: "Bihar", cities: ["Muzaffarpur", "Patna", "Supaul"] },
  { state: "Chandigarh", cities: ["Chandigarh"] },
  { state: "Chhattisgarh", cities: ["Bilaspur", "Raipur"] },
  { state: "Delhi", cities: ["Dalupura", "Delhi", "Najafgarh", "New Delhi", "Nangloi Jat", "Sultanpur Mazra", "Bhalswa Jahangirpur"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Rajkot", "Surat", "Vadodara"] },
  { state: "Haryana", cities: ["Faridabad"] },
  { state: "Himachal Pradesh", cities: ["Shimla"] },
  { state: "Jharkhand", cities: ["Dhanbad", "Jamshedpur", "Ranchi"] },
  { state: "Karnataka", cities: ["Abbigeri", "Bangalore", "Byatarayanpur", "Dasarhalli", "Yelahanka"] },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Gwalior", "Indore", "Jabalpur"] },
  { state: "Odisha", cities: ["Balasore", "Puri"] },
  { state: "Punjab", cities: ["Amritsar", "Ludhiana"] },
  { state: "Puducherry", cities: ["Puducherry"] },
  { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota"] },
  { state: "Tamil Nadu", cities: ["Ambattur", "Chennai", "Madurai", "Madhavaram", "Oulgaret", "Pallavaram", "Tiruvottiyur"] },
  { state: "Telangana", cities: ["Hyderabad", "Kukatpalli", "Secunderabad"] },
  { state: "Maharashtra", cities: ["Aurangabad", "Bhayandar", "Kalyan", "Mumbai", "Nagpur", "Nasik", "Pimpri-Chinchwad", "Pune", "Thane", "Vasai-Virar"] },
  { state: "West Bengal", cities: ["Barakpur", "Bansbaria", "Bhatpara", "Chandannagar", "Dam Dam", "Haora", "Krishnanagar", "Salt Lake City", "Shrirampur", "Titagarh", "Kolkata"] },
  { state: "Uttarakhand", cities: ["Haldwani"] },
  { state: "Jammu and Kashmir", cities: ["Srinagar"] },
  { state: "Uttar Pradesh", cities: ["Agra", "Aligarh", "Ghaziabad", "Kanpur", "Lucknow", "Meerut", "Mirzapur", "Murtazabad", "Prayagraj", "Varanasi"] },
];

function splitColumns(list, n = 5) {
  const cols = Array.from({ length: n }, () => []);
  list.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

const SupplyCities = () => {
  const columns = splitColumns(stateCityList, 5);

  return (
    <div className="supply-wrapper">
      <h4 className="supply-heading">
        <Globe className="supply-icon" />
        We Supply Across India
      </h4>

      <div className="supply-grid">
        {columns.map((group, i) => (
          <ul key={i} className="supply-col">
            {group.map(({ state, cities }, idx) => (
              <li key={idx}>
                <strong className="state-name">{state}</strong>
                <div className="city-list">
                  {cities.map((city, j) => (
                    <span key={j} className="city-name">
                      <MapPin className="city-icon" />
                      {city}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SupplyCities;
