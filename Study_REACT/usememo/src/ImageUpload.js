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
    console.log(formData);
    formData.append("file:", uploadData[0]);
    const uploadDataSizeCheck = [...formData].reduce(
      (sum, totalSize) => sum + totalSize.size,
      0
    );

    // formData.append("file", e.target.files[0]);
    if (uploadData.length < 4) {
      //uploadData size 제한
      if (uploadDataSizeCheck < 10000000) {
        console.log(uploadDataSizeCheck);
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
      } else {
        alert("사진용량이 초과되었습니다.");
      }
    } else {
      alert("사진 3장을 초과하였습니다.");
    }
  };
  return (
    <div>
      <label>사진을 골라주세여</label>
      <input
        type="file"
        label="Upload"
        accept="image/*"
        multiple="mutiple"
        onChange={uploadFile}
      />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default App;
