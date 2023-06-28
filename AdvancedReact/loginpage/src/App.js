import "./App.css";

const Button = ({ type, children, ...ButtonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...ButtonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...ButtonProps }) => {
  return (
    <Button
      type="secondary"
      {...ButtonProps}
      onclick={() => {
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Logging in!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
