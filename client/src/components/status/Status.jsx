import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethod.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Status.css";

const Status = () => {
  const navigate = useNavigate();
  // const [image, setImage] = useState(null)
  const { currentuser } = useSelector((state) => state.user);
  const text = useRef();
  const submitPost = async () => {
    try {
      const data = {
        desc: text.current.value,
      };
      const post = await userRequest.post("/posts", data);
      // console.log(post);
      navigate(`/post/${post.data._id}`);
    } catch (error) {
      toast("Error creating Post.");
    }
  };
  return (
    <div className="status">
      <div className="status-container">
        <div className="status-left">
          {!currentuser.profilePic ? (
            <Avatar sx={{ width: 56, height: 56 }}>
              {currentuser.username[0]}
            </Avatar>
          ) : (
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={currentuser.profilePic}
            />
          )}
        </div>
        <form className="status-right">
          <div className="status-right-top">
            <textarea ref={text} placeholder="What's on your mind?"></textarea>
          </div>
          <div className="status-right-bottom">
            <div className="status-right-bottom-left">
              <label>
                <input type="file" />
                <Add />
                Add Image
              </label>
              <label>
                <input type="file" />
                <Add />
                Add Video
              </label>
            </div>
            <div className="status-right-bottom-right">
              <button onClick={submitPost}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Status;
