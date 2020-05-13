import React from "react";
import marked from "marked";
import hljs from "highlight.js";

class Editor extends React.Component {
  state = {
    content: "",
    htmlContent: "",
  };

  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      langPrefix: "hljs language-",
      highlight: function (code) {
        return hljs.highlightAuto(code, ["html", "javascript"]).value;
      },
      gfm: true,
      smartLists: true,
      smartypants: true,
    });
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      htmlContent: marked(this.state.content),
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card markdown-card">
              <div className="card-body">
                <textarea
                  id="markdown"
                  className={
                    "markdown " +
                    (this.props.theme === "dark"
                      ? "markdown-dark"
                      : "markdown-light")
                  }
                  defaultValue={this.state.content}
                  onChange={(e) => this.handleChange(e)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card preview-card">
              <div className="card-body">
                <div
                  id="preview"
                  className={
                    "preview " +
                    (this.props.theme === "dark"
                      ? "preview-dark"
                      : "preview-light")
                  }
                  dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
