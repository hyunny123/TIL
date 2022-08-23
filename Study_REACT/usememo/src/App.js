import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [uploadData, setUploadData] = useState({
    file: null,
  });
  const uploadFile = (e) => {
    console.log(e.target.files);

    setUploadData(e.target.files);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file:", uploadData[0]);
    // formData.append("file", e.target.files[0]);
    axios
      .post({
        url: "EXPRESS JS POST REQUEST PATH",
        data: formData,
        config: {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <label>사진을 골라주세여</label>
      <input
        type="file"
        label="Upload"
        accept="image/*"
        onChange={uploadFile}
        //   ref={(ref) => (this.fileUpload = ref)}
      />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default App;
