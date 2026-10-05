import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id, isDeleting) => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(id),
  );

  useEffect(() => {
    if (!currentDiaryItem && !isDeleting.current) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [currentDiaryItem, isDeleting, nav]);

  return currentDiaryItem;
};

export default useDiary;