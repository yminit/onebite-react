import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContest } from "../App";
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContest);
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChageContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChageContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
