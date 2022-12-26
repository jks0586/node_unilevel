
import React,{useState,useEffect} from "react";
import dynamic from "next/dynamic";
const Test = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState("");
  const Editor = dynamic(() => import("../components/Editor"), { ssr: false });
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

	return (
		<div className="container">
            <Editor 
            onChange={(data) => {
                setData(data);
                }}
                editorLoaded={editorLoaded} 
                />				
		</div>
	);
};

export default Test;
