# 🚀 AstroTrack

![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github)
![Build](https://img.shields.io/github/actions/workflow/status/imardev/AstroTrack/deploy.yml?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **Asteroid Monitoring System**  
> Real-time insights on near-earth objects powered by NASA data, offering precise tracking, risk evaluation, and a clean view of asteroid activity.

---

## 🌐 Live Demo

https://imardev.github.io/AstroTrack/

---

## 📌 Overview

AstroTrack is a modern data-driven web application designed to transform raw space telemetry into clear, structured, and actionable insights.

Rather than exposing raw API responses, the application focuses on:

- clarity over noise
- usability over complexity
- insights over raw data

---

## ✨ Features

- 📅 Query asteroid data by date
- ☄️ Daily near-Earth object tracking
- ⚠️ Hazardous asteroid detection system
- 📊 Key metrics:
  - Closest approach distance
  - Fastest object detected
  - Largest asteroid (planned)
- 🎯 Clean, minimal and intuitive UI
- 🌌 Space-inspired visual design

---

## 🛰️ Data Source

This project uses the NASA Near Earth Object Web Service (NeoWs):

👉 https://api.nasa.gov/

---

## 🛠️ Tech Stack

- ⚛️ React (UI layer)
- ⚡ Vite (build tool)
- 🎨 Tailwind CSS (styling)
- 🌐 Fetch API (data layer)

---

## 📦 Installation

```bash
git clone https://github.com/imardev/AstroTrack.git
cd astrotrack
pnpm install
pnpm dev
```

## 🔐 Environment Variables

Create a .env file in the root of the project:

```bash
VITE_NASA_API_KEY=your_api_key_here
```

You can use NASA's DEMO_KEY for testing, but it has rate limits.

## 📸 Preview

### 🔹 Main Interface

![AstroTrack Preview](https://raw.githubusercontent.com/imardev/AstroTrack/refs/heads/main/src/assets/principal.png)

### 🔹 Results Information

![AstroTrack Preview](https://raw.githubusercontent.com/imardev/AstroTrack/refs/heads/main/src/assets/neo.png)

## 🚧 Roadmap

- 📈 Historical comparisons between dates
- 🔔 Hazard alert system
- 🌍 Interactive orbital visualization
- 📊 Advanced analytics
- 📱 Improved mobile experience

## 📄 License

[MIT License](/LICENSE)

## 👨‍💻 Author

Developed by Ismael

## ⭐ Support

If you find this project useful, consider giving it a star on GitHub!
