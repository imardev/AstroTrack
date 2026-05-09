const BaseUrl = "https://nasa.ismartin.com";

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

async function fetchNeosByDate(date) {
  const response = await fetch(
    `${BaseUrl}?start_date=${date}&end_date=${date}`,
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  return response.json();
}

export async function getTotalNeos() {
  try {
    const date = getTodayDate();
    const data = await fetchNeosByDate(date);

    if (!data || typeof data.element_count !== "number") {
      throw new Error("Invalid API response");
    }

    return data.element_count;
  } catch (error) {
    console.error("Error fetching total NEOs:", error);
    throw error;
  }
}

export async function getHazardousNeos() {
  try {
    const date = getTodayDate();
    const data = await fetchNeosByDate(date);

    const neos = data.near_earth_objects?.[date] ?? [];

    return neos.filter((neo) => neo.is_potentially_hazardous_asteroid === true)
      .length;
  } catch (error) {
    console.error("Error fetching hazardous NEOs:", error);
    throw error;
  }
}

export async function getNeosByDate(date) {
  try {
    const data = await fetchNeosByDate(date);

    return data.near_earth_objects?.[date] ?? [];
  } catch (error) {
    console.error("Error fetching NEOs by date:", error);
    throw error;
  }
}

export default {
  getTotalNeos,
  getHazardousNeos,
  getNeosByDate,
};
