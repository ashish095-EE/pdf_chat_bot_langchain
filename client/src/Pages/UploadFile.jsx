import { Link } from "react-router";
import Header from "../components/Header";
import { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
        <div className="w-full max-w-[1200px] h-auto bg-[#D4F5FF] shadow-lg rounded-xl border flex flex-col sm:flex-row p-6 items-center gap-6">
          <div className="flex flex-col gap-3 justify-between w-full sm:w-1/2 h-full items-center">
            <h1 className="text-2xl sm:text-[34px] font-bold text-center sm:text-left">
              Upload Your Pdf Here
            </h1>

            <div className="border rounded-lg outline-dashed flex flex-col h-full w-full items-center p-6">
              <img
                src="document.png"
                alt="Document"
                className="max-w-[150px] object-contain mb-4"
              />
              <p className="text-xl sm:text-[30px] font-bold text-center sm:text-left">
                Drag Files To Upload
              </p>
              <p className="m-2">Or</p>

              <button
                type="button"
                onClick={handleFileUpload}
                className="bg-[#1E3342] hover:bg-opacity-30 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Choose File
              </button>

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept=".pdf,.txt,.docx,.doc"
                onChange={handleFileSelect}
              />

              <p className="m-2 text-sm sm:text-base">Files type Supported: .pdf, .txt, .docx, .doc</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 h-auto flex flex-col gap-4 items-center justify-center">
            {file && <p className="text-lg sm:text-xl">File Uploaded: {file.name}</p>}
            <Link to="/bot">
              <button className="bg-[#1E3342] hover:bg-opacity-20 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Chat With Your Pdf
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadFile;
