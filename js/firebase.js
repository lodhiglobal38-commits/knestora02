https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js
https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js
const firebaseConfig = {
  apiKey: "AIzaSyBuvweceD-ZGkYZHwhN1YLlgZetK37RnvI",
  authDomain: "knestora-73694.firebaseapp.com",
  projectId: "knestora-73694",
  storageBucket: "knestora-73694.firebasestorage.app",
  messagingSenderId: "583839573785",
  appId: "1:583839573785:web:866683a38d4bade0bd0788",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);