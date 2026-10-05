import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기 수정`);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const isDeleting = useRef(false);
  const currentDiaryItem = useDiary(params.id, isDeleting);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구 되지 않아요")) {
      isDeleting.current = true;

      onDelete(params.id);

      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );

      nav("/", { replace: true });
    }
  };

  return (
    <div className="edit">
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />

      {currentDiaryItem && (
        <Editor onSubmit={onSubmit} initData={currentDiaryItem} />
      )}
    </div>
  );
};

export default Edit;
