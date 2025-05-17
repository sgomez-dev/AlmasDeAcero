export const tracks = [
    { name: "Brain Dance", file: "/music/Brain Dance.mp3" },
    { name: "Cloud Dancer", file: "/music/Cloud Dancer.mp3" },
  ];
  
export const nameToFileMap = Object.fromEntries(
tracks.map((track) => [track.name, track.file])
);
  