function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>My Daily Routine</h1>

        <p style={styles.subtitle}>
          Plan your day • Stay focused • Keep growing 
        </p>

        <div style={styles.card}>
          <h2>👋 Welcome!</h2>
          <p>Write and manage your daily routine easily.</p>

          <input
            type="text"
            placeholder="Enter your name"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Enter Roll Number"
            style={styles.input}
          />

          <button style={styles.button}>
            Get Started
          </button>
        </div>

        <div style={styles.card}>
          <h2>📅 Today's Routine</h2>

          <div style={styles.task}>
            <span>📚 Study / College Work</span>
            <button style={styles.smallButton}>Done</button>
          </div>

          <div style={styles.task}>
            <span>💻 Coding Practice</span>
            <button style={styles.smallButton}>Done</button>
          </div>

          <div style={styles.task}>
            <span>🧠 DSA Practice</span>
            <button style={styles.smallButton}>Done</button>
          </div>

          <div style={styles.task}>
            <span>🌙 Revision</span>
            <button style={styles.smallButton}>Done</button>
          </div>
        </div>

        <div style={styles.links}>
          <a href="https://github.com" target="_blank">
            GitHub
          </a>

          <a href="https://www.google.com" target="_blank">
            Google
          </a>

          <a href="https://www.youtube.com" target="_blank">
            YouTube
          </a>
        </div>

        <p style={styles.footer}>
          Made with ❤️ using React
        </p>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "700px",
    margin: "auto",
    textAlign: "center",
  },

  title: {
    color: "white",
    fontSize: "42px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#eeeeee",
    fontSize: "18px",
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    marginBottom: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  input: {
    width: "90%",
    padding: "14px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "16px",
  },

  button: {
    background: "#667eea",
    color: "white",
    border: "none",
    padding: "13px 30px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },

  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px",
    margin: "10px 0",
    background: "#f5f5ff",
    borderRadius: "10px",
  },

  smallButton: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "20px",
  },

  footer: {
    color: "white",
    marginTop: "25px",
  },
  "scripts": {
    "Dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
};

export default App;