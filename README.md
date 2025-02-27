# 🚀 Star Wars Character Explorer

A **React** application that allows users to **search, explore, and favorite** Star Wars characters using data from the **Star Wars API (SWAPI)**.

---

## 📌 Features

✅ **Search for Star Wars characters**  
✅ **Infinite scrolling** for seamless exploration  
✅ **Favorites management** with persistent storage  
✅ **Detailed character modal** with homeworld info  
✅ **Optimized debounced search** to reduce API calls  
✅ **Consistent images using caching mechanism**  

---

## 🔧 How to Run the Application

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### **Steps to Run**
1. **Clone the Repository**
   ```sh
   git clone https://github.com/maayankoren/starwars-app.git
   cd starwars-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   # OR
   yarn install
   ```

3. **Run the Development Server**
   ```sh
   npm start
   # OR
   yarn start
   ```

4. **Open in Browser**  
   Visit: [`http://localhost:3000`](http://localhost:3000) to explore the app.

---

## 🛠 Tech Design Guidelines

### **1️⃣ Breakdown of Components**
| Component | Description |
|-----------|------------|
| `App.tsx` | Main entry point, handles state, search, and pagination. |
| `CharacterList.tsx` | Displays the list of Star Wars characters. |
| `CharacterCard.tsx` | Represents a single character with modal and favorite toggle. |
| `FavoriteList.tsx` | Displays the user's favorite characters. |
| `CharacterModal.tsx` | Shows character details with additional info (e.g., homeworld). |
| `useCharacters.ts` | Custom hook for fetching and managing character data. |
| `useDebounce.ts` | Handles debouncing for optimized search. |
| `apiService.ts` | API functions to fetch character and homeworld data. |

---

### **2️⃣ Services**
#### **📡 API Service**
The app fetches character data using the **Star Wars API (SWAPI)**.

- **`fetchCharacters(page: number)`**  
  - Fetches paginated characters.
  - **API Endpoint:** `${SWAPAPI}/?page=${page}`
  
- **`fetchFilteredCharacters(searchTerm: string)`**  
  - Fetches characters matching the search term.
  - **API Endpoint:** `${SWAPAPI}/?search=${searchTerm}`

- **`fetchHomeworldData(homeworldURL: string)`**  
  - Fetches homeworld details.
  - **API Endpoint:** Character's `homeworld` URL from SWAPI.

#### **🗄️ State Management**
- **React `useState` & `useEffect`** handle character storage, search, and pagination.
- **Persistent Image Cache (`useRef`)** ensures character images remain consistent between searches.

---

## 🔄 Interaction Flow Diagram

### **🔹 Component Render Flow**
1. **`App.tsx` loads**
   - Fetches initial character list.
   - Displays components (`CharacterList`, `FavoriteList`).
   - Maintains **favorites state** across user actions.

2. **User Interactions**
   - **Search** updates character list via `useCharacters` hook.
   - **Favorites** persist using `useState`.
   - **Pagination** loads more characters on scroll.

---

### **🔹 Search Flow**
1. User types in the search bar.
2. **Debounced search** prevents excessive API calls (`useDebounce`).
3. API fetches matching characters (`fetchFilteredCharacters`).
4. **Results update dynamically** without affecting cached images.

---

### **🔹 Modal Interaction**
1. User clicks "More Info" on a character.
2. `CharacterModal` fetches additional data (e.g., **homeworld**).
3. Details are displayed dynamically.
4. User clicks "Close" to exit the modal.

---

### **🔹 Favorites Management**
1. User clicks **"Add to Favorites"** (checkbox toggle).
2. `setFavorites` updates **favorites state**.
3. `FavoriteList` displays saved characters.
4. Favorites persist across pagination.

---

## 📌 Additional Features
✅ **Debounced Search**: Optimized performance for searching characters.  
✅ **Infinite Scrolling**: More characters load as the user scrolls.  
✅ **Persistent Character Images**: Avoids image flickering between searches.  
✅ **Favorite Management**: Allows users to bookmark characters.  
✅ **Dynamic Modals**: Displays additional character details dynamically.  

---

## 🛠 Future Enhancements
🔹 Add **dark mode** for better UX.  
🔹 Implement **Redux** for improved state management.  
🔹 Cache API results to reduce redundant requests.  

---

## 📜 License
This project is licensed under the **MIT License**.

---

🎉 **Enjoy exploring the Star Wars universe!** 🚀  
Let me know if you need any modifications! 💡

