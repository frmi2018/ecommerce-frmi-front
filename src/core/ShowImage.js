import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <div className="row">
    <img
      className="mx-auto text-center"
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      style={{ maxWidth: "200px" }}
    />
  </div>
);

export default ShowImage;
