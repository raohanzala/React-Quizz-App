function Options({questions, dispatch, answer}) {

  console.log(questions.questions.length);
  console.log(questions.questions);

  const hasAnswered = answer !== null

  return (
   <div className="options">\
   {questions.questions.options.map((option, index)=> (
    <button className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered ? index === questions.correctOption ? "correct" : 'wrong' : ''}`} disabled={hasAnswered} onClick={()=> dispatch({type : 'newAnswer', payload : index})}>{option}</button>
   ) )}
   </div>
  );
}

export default Options;
