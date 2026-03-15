// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  setLogLevel,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLxjBf_q72n5-VTkli9j4EGUTlmWLMHzw",
  authDomain: "food-95c16.firebaseapp.com",
  projectId: "food-95c16",
  storageBucket: "food-95c16.appspot.com", // đã fix đúng
  messagingSenderId: "235552775437",
  appId: "1:235552775437:web:7756d080b1c5ee5853e444",
  measurementId: "G-80LKZVLQ4B",
};

// ✅ Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Khởi tạo Firestore (có cache offline để tránh lỗi "transport errored")
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

// ✅ Ẩn log cảnh báo transport
setLogLevel("error");

// ✅ Khởi tạo Auth
const auth = getAuth(app);

// ✅ Xuất ra để dùng trong toàn app
export { app, db, auth };
