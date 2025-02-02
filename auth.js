// Ensure Firebase is initialized only once
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD973DOB5cFx0ZiIjfQI8toUHHbaT70UeQ",
        authDomain: "soraldabest.firebaseapp.com",
        projectId: "soraldabest",
        storageBucket: "soraldabest.firebasestorage.app",
        messagingSenderId: "1046107389807",
        appId: "1:1046107389807:web:755e4724322ba618dcb29a",
        measurementId: "G-K6ZC913ET0"
    });
}

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("signup-link").style.display = "none";
        document.getElementById("user-info").style.display = "inline";
        document.getElementById("user-greeting").innerText = `Hello, ${user.email}`;
    } else {
        document.getElementById("login-link").style.display = "inline";
        document.getElementById("signup-link").style.display = "inline";
        document.getElementById("user-info").style.display = "none";
    }
});

function logout() {
    auth.signOut().then(() => {
        location.reload();
    });
}
