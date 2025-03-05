import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import LoaderPage from "../../Components/Shared/LoaderPage";

export default function UpdateService() {
  const { slug } = useParams();
  const [service, setService] = useState({});
  

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  //manage data
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [url, setURL] = useState("");
  const [slogan, setSlogan] = useState("");


  //get service
  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.homegrowbd.com/api/service-details/${slug}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
          setMetaTitle(data.data.meta_title);
          setMetaDescription(data.data.meta_description);
          setURL(data.data.url);
          setValue(data.data.content);
          setThumbnail(data.data.icon);
          setTitle(data.data.title);
          setSlogan(data.data.slogan);
          setLoader(false);
        }
      });
  }, []);

  // update service
  const updateService = async (id) => {
    setUpdateLoader(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("thumbnail", thumbnail);
    formData.append("slogan", slogan);
    formData.append("content", value);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("url", url);
    try {
      const response = await fetch(
        `https://api.homegrowbd.com/api/service/update/${id}`,
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
        setUpdateLoader(false);
        navigate("/admin/manage_service");
      }
      // Handle response data as needed
    } catch (error) {
      console.error("Error:", error);
      setUpdateLoader(false);
    }
  };
  return (
    <section className="mt-5 md:mt-0 md:p-5 lg:p-10 flex flex-col gap-2.5">
      {loader ? (
        <LoaderPage />
      ) : (
        <>
          <label className="font-semibold">Update thumbnail</label>
          <img src={service?.thumbnail} alt="" className="h-[250px] w-1/2" />
          <input
            type="file"
            className=""
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <label className="font-semibold">Title</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <label className="font-semibold">Meta Title</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            type="text"
          />
          <label className="font-semibold">Meta Description</label>
          <textarea
            className="px-4 py-2 border w-full"
            defaultValue={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            type="text"
          />
          <label className="font-semibold">URL</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={url}
            onChange={(e) => setURL(e.target.value)}
            type="text"
          />
          <label className="font-semibold">Slogan</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            type="text"
          />
          <label className="font-semibold">Content</label>
          {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
          <button
            onClick={() => updateService(service?.id)}
            className="bg-primary mt-2.5 flex gap-2 items-center w-fit"
          >
            Update
            {updateLoader && <Spinner className="h-4 w-4" />}
          </button>
        </>
      )}
    </section>
  );
}
