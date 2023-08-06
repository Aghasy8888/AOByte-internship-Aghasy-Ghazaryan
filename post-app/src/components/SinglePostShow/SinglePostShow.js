import React, { memo, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Sort from "../Sort/Sort";
import { order } from "../PostList/sortOptions";
import {
  isOnlySpaces,
  separateStr_1ByStr_2,
  sort as sortComments,
} from "../../helpers/helpers";
import idGenarator from "../../helpers/idGenarator";
import styles from "./SinglePostShowStyle.module.css";

function SinglePostShow(props) {
  const [comments, setComments] = useState([...props.comments]);
  const [sort, setSort] = useState({ value: "" });
  const [comTextToBeAdded, setComTextToBeAdded] = useState("");
  const { title, content, search } = props;
  const titleContainsSearch = title
    .toLowerCase()
    .includes(search.toLowerCase());

  const titleComponent =
    search && titleContainsSearch
      ? separateStr_1ByStr_2(title, search).map(
          //the last item of the array returned by separateStr_1ByStr_2 is the original searched text
          (splittedPart, index) => {
            const splittedTitle = separateStr_1ByStr_2(title, search);
            const originalSearchedText =
              splittedTitle[splittedTitle.length - 1];

            if (index === splittedTitle.length - 2) {
              return <span key={index}>{splittedPart}</span>;
            } else if (index === splittedTitle.length - 1) {
              return "";
            }

            return (
              <span key={index}>
                {splittedPart}
                <mark className={styles.search}>{originalSearchedText}</mark>
              </span>
            );
          }
        )
      : title;

  useEffect(() => {
    setComments([...props.comments]);
  }, [props.comments]);

  const handleSort = (option) => {
    setSort(option);
    setComments((prevComments) => {
      const commentsCopy = [...prevComments];
      sortComments(option.value, commentsCopy, order);

      return commentsCopy;
    });
  };

  const deleteComment = (postId) => {
    setComments((prevComments) => {
      const commentsCopy = [...prevComments];
      const updatedComments = commentsCopy.filter(
        (comment) => comment.id !== postId
      );

      return updatedComments;
    });
  };

  const addComment = () => {
    if (!comTextToBeAdded || isOnlySpaces(comTextToBeAdded)) {
      return;
    }

    const commentToBeAdded = {
      content: comTextToBeAdded,
      id: idGenarator(),
      rating: (Math.random() * 9 + 1).toFixed(0),
    };

    setComments((prevComments) => {
      const updatedComments = [...prevComments, commentToBeAdded];

      return updatedComments;
    });

    setComTextToBeAdded("");
  };

  const commentComponents = comments.map((comment, index) => (
    <div key={index}>
      <div className={styles.userX}>User X</div>

      <div className={styles.comment}>
        {comment.content}
        <div className={styles.bottomContainer}>
          <div className={styles.rating}>Rating {comment.rating}</div>
          <Button
            variant="danger"
            onClick={() => {
              deleteComment(comment.id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  ));

  const isDisabled = comments.length === 0 || comments.length === 1;

  return (
    <div className={styles.singlePostShow}>
      <h4>{search ? titleComponent : title}</h4>
      <p>{content}</p>
      <Sort isDisabled={isDisabled} sort={sort} handleSort={handleSort} />
      {commentComponents}

      <InputGroup className={styles.inputGroup}>
        <Form.Control
          className={styles.formControl}
          placeholder="Add a comment..."
          value={comTextToBeAdded}
          onChange={(event) => {
            setComTextToBeAdded(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addComment();
            }
          }}
        />
        <Button variant="info" onClick={() => addComment()}>
          Comment
        </Button>
      </InputGroup>
    </div>
  );
}

export default memo(SinglePostShow);
