import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RenderModal from "./Modal";
import "./TestPage.css";
import Draggable from "react-draggable";

/**
 * @author: Sohag babu
 * @function SignUp
 **/

const TestPage = (props) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleInput = () => {
    if (text === "") {
      alert("text is required");
      return;
    }
    setShow(false);
    console.log({ text });
  };

  return (
    <>
      <div className="previewComponent">
        <div>
          <h3 className="heading">Add Text To Image</h3>
          <Button onClick={handleShow}>Add Text</Button>
          <RenderModal
            show={show}
            text={text}
            setText={setText}
            onSubmit={handleInput}
            handleClose={() => setShow(false)}
          />
          ;
        </div>
        <div className="img-container">
          <img
            src="https://www.goodf.co.uk/images/plain-white-t-shirt-100-cotton-xxxlarge-p4621-4121_image.jpg"
            className="img-fluid"
            alt="Responsive image"
          />
          <div className="centered-img">
            <div className="container__drag">
              <Draggable bounds="parent">
                <div style={{ width: 200 }} className="draggable">
                  <div style={{ border: "1px dotted black" }}>
                    <h4 style={{ userSelect: "none" }}>{text}</h4>
                    <button
                      disabled={text === "" ? true : false}
                      onClick={() => setText("")}
                      className="remove-image"
                      style={{ display: "inline" }}
                    >
                      &#215;
                    </button>
                  </div>
                  <br />
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
