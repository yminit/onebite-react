import useInput from "../hooks/useInput";
// const state = useState();
const HookExam = () => {
  const [input, onChange] = useInput();
  // if(true){
  //   const steat1= useState();
  // }
  // const state = useState();
  return (
    <div>
      <input value={input} onChange={onChange} type="text" />
    </div>
  );
};

export default HookExam;
