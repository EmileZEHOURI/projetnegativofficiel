import dynamic from "next/dynamic";

const GymMap = dynamic(() => import("./gym-map.client"), {
  ssr: false,
});

export default GymMap;