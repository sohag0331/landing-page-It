import React, { Component } from "react";
import "./InputImg.css";

export default class InputImage extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
  }

  removeItem = (index) => {
    let newList = this.fileArray.splice(index, 1);
    this.setState({ fileArray: newList });
  };
  render() {
    return (
      <div className="previewComponent">
        <h3 className="heading">React Multiple Images Input With Preview</h3>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={this.uploadMultipleFiles}
            multiple
          />
          <button
            className="submitButton"
            type="submit"
            onClick={this.uploadFiles}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">
          {(this.fileArray || []).map((url, index) => (
            <div key={index} className="image-area">
              <img src={url} alt="..." />
              <a
                onClick={this.removeItem.bind(this, url)}
                className="remove-image"
                style={{ display: "inline" }}
              >
                &#215;
              </a>
              <p>{url}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
