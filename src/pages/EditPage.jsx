import React, { useState,useRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsPNG } from "react-component-export-image";
import Text from "../components/Text";
const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const AddText = () => {
    setCount((prev) => prev + 1);
  };
  const memeRef = useRef();
  return (
    <div>
      <h1 className="text-center">Edit Page</h1>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="250px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button style={{marginRight:"5px"}} onClick={AddText}>Add Text</Button>
      <Button variant="success" onClick={e=>exportComponentAsPNG(memeRef) }>Save</Button>
    </div>
  );
};

export default EditPage;
