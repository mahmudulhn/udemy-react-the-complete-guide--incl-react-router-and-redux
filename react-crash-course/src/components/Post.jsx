/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </div>
  );
};

export default Post;
