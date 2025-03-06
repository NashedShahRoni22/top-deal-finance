import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";

export default function AdminAddService() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [editorContent, setEditorContent] = useState("");

  // handle editor content change
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  // add a new service
  const addService = async (e) => {
    setLoader(true);
    e.preventDefault();
    const title = e.target.title.value;
    const meta_title = e.target.meta_title.value;
    const meta_description = e.target.meta_description.value;
    const slogan = e.target.slogan.value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("meta_title", meta_title);
    formData.append("meta_description", meta_description);
    formData.append("url", meta_description); // I'm assuming you're using meta_description as the URL
    formData.append("thumbnail", thumbnail);
    formData.append("slogan", slogan);
    formData.append("content", editorContent); // append editor content here

    try {
      const response = await fetch(
        "https://api.homegrowbd.com/api/service/store",
        {
          method: "POST",
          body: formData,
          headers: {
            // Add any necessary headers, such as authorization
          },
        }
      );
      const data = await response.json();
      if (data.status === true) {
        window.alert(data.msg);
        setLoader(false);
        navigate("/admin/manage_service");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoader(false);
    }
  };

  return (
    <form
      className="!mt-5 md:!mt-0 md:!p-5 lg:!p-10 flex flex-col gap-5"
      onSubmit={addService}
    >
      <div className="flex justify-between">
        <h5 className="text-xl md:text-3xl text-primary font-semibold">
          Add Service
        </h5>
        <button
          disabled={loader}
          type="submit"
          className="flex gap-2 items-center !px-6 !py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all cursor-pointer"
        >
          Submit
          {
            loader && <FaSpinner className="text-xl animate-spin"/>
          }
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        <label>
          Select Thumbnail Image
        </label>
        <div className="flex items-center gap-2.5">
          <input
            type="file"
            className="hidden"
            id="thumbnail-input"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <label
            htmlFor="thumbnail-input"
            className="cursor-pointer !py-2 !px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition-all"
          >
            Choose File
          </label>
          {thumbnail && (
            <span className="text-sm text-gray-500 truncate w-40">
              {thumbnail.name}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter Title</label>
        <input
          type="text"
          name="title"
          className="!px-4 !py-2 outline-none border rounded"
          placeholder="Enter Title"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter Meta Title</label>
        <input
          type="text"
          name="meta_title"
          className="!px-4 !py-2 outline-none border rounded"
          placeholder="Enter Meta Title"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter Meta Description</label>
        <textarea
          type="text"
          rows={4}
          name="meta_description"
          className="!px-4 !py-2 outline-none border rounded"
          placeholder="Enter Meta Description"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter URL</label>
        <input
          type="text"
          name="url"
          className="!px-4 !py-2 outline-none border rounded"
          placeholder="Enter URL"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter Slogan</label>
        <input
          type="text"
          name="slogan"
          className="!px-4 !py-2 outline-none border rounded"
          placeholder="Enter Slogan"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label>Enter Content</label>
        <SunEditor
            onChange={handleEditorChange}
            name="description"
            height="220px"
            setOptions={{
              buttonList: [
                [
                  "undo",
                  "redo",
                  "formatBlock",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                ],
                [
                  "fontSize",
                  "fontColor",
                  "hiliteColor",
                  "align",
                  "list",
                  "link",
                  "image",
                  "video",
                ],
                ["removeFormat", "preview"],
              ],
              charCounter: true,
            }}
          />
      </div>
    </form>
  );
}
