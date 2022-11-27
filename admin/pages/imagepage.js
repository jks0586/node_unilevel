import React, { useState,useEffect } from "react";

const imagepage = () => {
  const initalState = {
    name: "",
    image: [],
  };
  const [userData, setUserData] = useState(initalState);

  const handleFileChange = (e) => {
    e.preventDefault();
    let pfile = e.target.files;
    // console.log(pfile);

        for (let i = 0; i < pfile.length; i++) {
          const fileType = pfile[i]["type"];
          const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
          if (validImageTypes.includes(fileType)) {
            console.log(pfile[i]);
            setUserData({ ...userData, image: pfile[i] });
            console.log(userData);
            
            //  setFile([...files, file[i]]);
            //      setUserData({ ...userData, image: e.target.pfile[i] });
            //     if (e.target.files && e.target.files.length > 0) {
            //       setSelectedImage(e.target.files[0]);
            //       console.log(file);
            //        }
      };
        }

  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //     console.log(userData);
    // }, 2000);
  
    // return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {

      e.preventDefault();

  }

  return (
    <div>
    <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
    >
      <div className="p-3 md:w-1/2 w-[360px] bg-white rounded-md">
        <span className="flex justify-center items-center text-[12px] mb-1 text-red-500"></span>
        <div className="h-32 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
          <input
            type="file"
            onChange={handleFileChange}
            className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
            multiple={true}
            name="files[]"
          />
          <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
            <div className="flex flex-col">
              <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
              <span className="text-[12px]">{`Drag and Drop a file`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          
        </div>
      </div>
      <input type="submit" value="submit" />
        </form>
    </div>
  );
};

export default imagepage;
