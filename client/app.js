function goToDashboard() {
    document.body.innerHTML = `
        <div class="container">
            <h2>Dashboard</h2>
            <div>
                <p>Programs Tracked: 0</p>
                <p>Open Source Repos: 0</p>
                <p>Roadmap Items: 0</p>
            </div>
            <button onclick="goToAuth()">Login</button>
        </div>
    `;
}

function goToAuth() {
    document.body.innerHTML = `
        <div class="container">
            <h2>Login</h2>
            <input placeholder="Email"/><br><br>
            <input placeholder="Password" type="password"/><br><br>
            <button>Login</button>
        </div>
    `;
}

