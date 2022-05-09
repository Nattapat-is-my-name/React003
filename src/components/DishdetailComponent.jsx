import { COMMENTS } from "../shared /comments";
function Dishdetail(props) {
    const commentArr = COMMENTS.filter((com) => com.id === props.dishes.id)
    const comments = commentArr.map((com) => {
        return (
            <>
            <h4>{com.author}</h4>
            <p>{com.comment}</p>
            <p>{com.date}</p>
            </>
            
        );
    })
}             
export default Dishdetail;