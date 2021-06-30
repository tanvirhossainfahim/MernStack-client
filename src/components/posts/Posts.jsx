import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://img.freepik.com/free-vector/illustration-passion_53876-17884.jpg?size=626&ext=jpg" />
      <Post img="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
      <Post img="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc="/>
      <Post img="https://media.istockphoto.com/photos/blonde-woman-in-wild-patterned-dress-picture-id108329358?k=6&m=108329358&s=612x612&w=0&h=S30IbyZ7bd4mVfAPGWyaj4skPW04sKCobn6Efeum6Ow="/>
      <Post img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
      <Post img="https://i.ytimg.com/vi/S9YBewp_TpQ/maxresdefault.jpg"/>
    </div>
  );
}
