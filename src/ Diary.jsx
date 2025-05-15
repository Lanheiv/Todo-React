function Diary ({title, body, date}) {
    return (
        <div class="box">
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{date}</small>
        </div>
    );
}
export default Diary;