import { ResponsiveNetwork } from "@nivo/network";

const data = {
  nodes: [
    { id: "OptiSynX Drones", size: 50, color: "#ff5733" },
    { id: "Multisensory Systems", size: 40, color: "#33c1ff" },
    { id: "SAR", size: 30, color: "#33ff57" },
    { id: "Hyperspectral Cameras", size: 30, color: "#ff33a8" },
    { id: "UV Sensors", size: 30, color: "#ffc133" },
    { id: "TIR Detectors", size: 30, color: "#c133ff" },
    { id: "AI Anomaly Detection", size: 40, color: "#ff3385" },
    { id: "Data Fusion", size: 40, color: "#85ff33" },
    { id: "Real-time Monitoring", size: 40, color: "#3385ff" },
    { id: "Swarm Deployment", size: 40, color: "#ff8633" },
    { id: "Cloud & Edge Computing", size: 40, color: "#33ffdd" },
    { id: "Predictive AI Models", size: 40, color: "#aa33ff" },
    { id: "Targeted Response Actions", size: 40, color: "#ff336b" },
  ],
  links: [
    { source: "OptiSynX Drones", target: "Multisensory Systems" },
    { source: "Multisensory Systems", target: "SAR" },
    { source: "Multisensory Systems", target: "Hyperspectral Cameras" },
    { source: "Multisensory Systems", target: "UV Sensors" },
    { source: "Multisensory Systems", target: "TIR Detectors" },
    { source: "OptiSynX Drones", target: "AI Anomaly Detection" },
    { source: "AI Anomaly Detection", target: "Data Fusion" },
    { source: "AI Anomaly Detection", target: "Real-time Monitoring" },
    { source: "OptiSynX Drones", target: "Swarm Deployment" },
    { source: "Swarm Deployment", target: "Cloud & Edge Computing" },
    { source: "Cloud & Edge Computing", target: "Predictive AI Models" },
    { source: "Predictive AI Models", target: "Targeted Response Actions" },
  ],
};

export default function DroneNetworkChart() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ResponsiveNetwork
        data={data}
        linkDistance={80}
        centeringStrength={0.4}
        repulsivity={8}
        nodeSize={(n) => n.size}
        activeNodeSize={(n) => 1.3 * n.size}
        nodeColor={(node) => node.color}
        linkThickness={2}
        motionConfig="wobbly"
        nodeLabel={(node) => node.id} // ✅ This ensures labels appear
        label={(node) => node.id} // ✅ Double-checking labels
        labelTextColor={{ from: "color", modifiers: [["darker", 2]] }} // ✅ Darker labels for readability
        nodeTooltip={(node) => (
          <strong style={{ color: node.color }}>{node.id}</strong>
        )} // ✅ Tooltip for better UX
      />
    </div>
  );
}
