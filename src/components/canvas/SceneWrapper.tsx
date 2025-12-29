"use client";

import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-karnexa-void" />, 
});

export default function SceneWrapper() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Scene />
    </div>
  );
}
