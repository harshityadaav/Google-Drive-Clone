import React, { useState } from "react";
import "./css/sidebar.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Modal } from "@mui/base";
import firebase from 'firebase';
import { db,storage } from './firebase.js';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen=()=>{
    setOpen(true)
  }
  const handleChange = (e) => {
    if(e.target.files[0]){
      setFile(e.target.files[0])
    }
  }
 
  const handleUpload=(event)=>{
    event.preventDefault();
    setUploading(true);

    storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
        console.log(snapshot)
        storage.ref("files").child(file.name).getDownloadURL().then(url=>{
            db.collection("myfiles").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                filename:file.name,
                fileURL:url,
                size:snapshot._delegate.bytesTransferred
            })

            setUploading(false);
            setFile(null);
            setOpen(false)
        })
    })
            
}

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Slect file you want to upload</h3>
            </div>

            <div className="modalBody">
            {
              uploading ? (<p className="uploading">Uploading</p>) : (
                <div>
                <input type="file" onChange={handleChange} />
              <input type="submit" className="post_submit" onClick={handleUpload}/>
                </div>
              )
            }
            </div>
          </form>
        </div>
      </Modal>
      
      <div className="sidebar">
        <div className="sidebar_btn">
          <button onClick={handleOpen}>
            <span>+ New</span>
          </button>
        </div>
        <div className="sidebar_options">
          <div className="sidebar_option sidebar_option-Active">
            <MobileScreenShareIcon />
            <span>
              <b>My Drive</b>
            </span>
          </div>
          <div className="sidebar_option">
            <DevicesIcon />
            <span>Computers</span>
          </div>
          <div className="sidebar_option">
            <PeopleAltOutlinedIcon />
            <span>Shared with me</span>
          </div>
          <div className="sidebar_option">
            <QueryBuilderOutlinedIcon />
            <span>Recent</span>
          </div>
          <div className="sidebar_option">
            <StarBorderOutlinedIcon />
            <span>Starred</span>
          </div>
          <div className="sidebar_option">
            <DeleteOutlineOutlinedIcon />
            <span>Trash</span>
          </div>

          <hr />
          <div className="sidebar_option">
            <CloudQueueIcon />
            <span>Storage</span>
          </div>

          <div className="progressbar">
            <progress size="tiny" value="40" max="100" />
            <span>6.45 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
