import DroneNetworkChart from "./DroneNetworkChart";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>AI-Powered Drone Network</h1>
      <DroneNetworkChart />
    </div>
  );
}
