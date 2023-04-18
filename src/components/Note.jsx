import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="submit" onClick={(event)=>{
        event.preventDefault();
        props.onClicked(props.id);
      }}><DeleteIcon/></button>
    </div>
  );
}
export default Note;
