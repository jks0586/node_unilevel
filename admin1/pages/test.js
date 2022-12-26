import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Test = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const Ceditor = dynamic(() => import("./../components/Ceditor"), {
    ssr: false,
  });
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
  <Ceditor 
  onChange={(data) => {
      setData(data);
    }}
    editorLoaded={editorLoaded} 
    />
  </div>
  ) ;
};

export default Test;
