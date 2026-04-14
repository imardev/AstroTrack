const BaseUrl = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const today = new Date();

const date = today.toISOString().split("T")[0];

export async function getTotalNeos() {
  try {
    const response = await fetch(
      `${BaseUrl}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    if (!data || typeof data.element_count !== "number") {
      throw new Error("Invalid API response");
    }

    const totalNeos = data.element_count;
    return totalNeos;
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    throw error;
  }
}

export async function getHazardousNeos() {
  try {
    const response = await fetch(
      `${BaseUrl}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const neos = data.near_earth_objects?.[date] ?? [];
    const hazardousCount = neos.filter(
      (neo) => neo.is_potentially_hazardous_asteroid === true,
    ).length;

    return hazardousCount;
  } catch (error) {
    console.error("Error fetching hazardous NEOs from NASA API:", error);
    throw error;
  }
}

export async function getNeosByDate(date) {
  try {
    const response = await fetch(
      `${BaseUrl}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const neos = data.near_earth_objects?.[date] ?? [];
    return neos;
  } catch (error) {
    console.error("Error fetching NEOs by date from NASA API:", error);
    throw error;
  }
}

export default { getTotalNeos, getHazardousNeos, getNeosByDate };
