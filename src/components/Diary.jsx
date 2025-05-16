function Diary({ id, title, body, date, onDelete }) {
    return (
        <div className="box">
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{date}</small><br />
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Diary;
