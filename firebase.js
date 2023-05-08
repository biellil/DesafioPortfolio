
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBQOn9-rtugEct_Mz9HqK2i64U-HKU_xgI",
   authDomain: "portfolio-e0e9c.firebaseapp.com",
   projectId: "portfolio-e0e9c",
   storageBucket: "portfolio-e0e9c.appspot.com",
   messagingSenderId: "720653371561",
   appId: "1:720653371561:web:6c8e93070970f7380dc1b8",
   measurementId: "G-9NNQQVD95W"
 };

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);