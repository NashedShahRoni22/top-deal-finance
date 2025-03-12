import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import LoaderPage from "../../Components/Shared/LoaderPage";
import { FaSpinner } from "react-icons/fa6";

export default function UpdateBlog() {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);

  // Manage data
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [url, setURL] = useState("");
  const [slogan, setSlogan] = useState("");
  const [editorContent, setEditorContent] = useState("");

  // Fetch service details
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.homegrowbd.com/api/blog-details/${slug}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setTitle(data.data.title);
          setMetaTitle(data.data.meta_title);
          setMetaDescription(data.data.meta_description);
          setURL(data.data.url);
          setSlogan(data.data.slogan);
          setEditorContent(data.data.content);
          setThumbnail(data.data.thumbnail);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
        setLoader(false);
      });
  }, [slug, id]);

  // Handle editor content change
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  // Update service
  const updateService = async () => {
    setUpdateLoader(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("url", url);
    formData.append("slogan", slogan);
    formData.append("content", editorContent);
    formData.append("thumbnail", thumbnail);

    try {
      const response = await fetch(
        `https://api.homegrowbd.com/api/blog/update/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.status === true) {
        window.alert(data.msg);
        navigate("/admin/manage_blog");
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
    setUpdateLoader(false);
  };

  return (
    <section className="!mt-5 md:!mt-0 md:!p-5 lg:!p-10 flex flex-col gap-5">
      {loader ? (
        <LoaderPage />
      ) : (
        <>
          <h5 className="text-xl md:text-3xl text-primary font-semibold">
            Update Service
          </h5>

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
              Choose New File
            </label>
          </div>
          {thumbnail && typeof thumbnail === "string" ? (
            <img src={thumbnail} alt="Thumbnail" className="w-full h-[250px] md:h-[400px] object-fill" />
          ) : (
            thumbnail && (
              <img
                src={URL.createObjectURL(thumbnail)}
                alt="Thumbnail"
                className="w-full h-[250px] md:h-[400px] object-fill"
              />
            )
          )}

          <label className="font-semibold">Title</label>
          <input
            className="!px-4 !py-2 border w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />

          <label className="font-semibold">Meta Title</label>
          <input
            className="!px-4 !py-2 border w-full"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            type="text"
          />

          <label className="font-semibold">Meta Description</label>
          <textarea
            className="!px-4 !py-2 border w-full"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />

          <label className="font-semibold">URL</label>
          <input
            className="!px-4 !py-2 border w-full"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            type="text"
          />

          <label className="font-semibold">Slogan</label>
          <input
            className="!px-4 !py-2 border w-full"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            type="text"
          />

          <label className="font-semibold">Content</label>
          <SunEditor
            setContents={editorContent}
            onChange={handleEditorChange}
            height="600px"
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

          <button
            disabled={updateLoader}
            onClick={updateService}
            className="bg-blue-500 text-white  flex gap-2 items-center !px-6 !py-2.5 rounded hover:bg-blue-600 transition-all w-fit"
          >
            Update
            {updateLoader && <FaSpinner className="text-xl animate-spin" />}
          </button>
        </>
      )}
    </section>
  );
}
