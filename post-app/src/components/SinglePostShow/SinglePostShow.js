import React, { PureComponent } from 'react';
import styles from './SinglePostShowStyle.module.css';
import { separateStr_1ByStr_2, sort } from '../../helpers/helpers';
import Sort from '../Sort/Sort';
import { order } from '../PostList/sortOptions';
import { Button, Form, InputGroup } from 'react-bootstrap';
import idGenarator from '../../helpers/idGenarator'
class SinglePostShow extends PureComponent {
  state = {
    comments: [...this.props.comments],
    sort: { value: '' },
    comTextToBeAdded: '',
  }

  componentDidUpdate(prevProps) {
    if (prevProps.comments !== this.props.comments) {
      this.setState({
        comments: [...this.props.comments],
      });
    }
  }

  handleSort = (option) => {
    this.setState({ sort: option });
    this.setState((prevState) => {
    const commentsCopy = [...prevState.comments];            
    sort(prevState.sort.value, commentsCopy, order); 

      return {
        comments: commentsCopy,
      };
    });
  };

  deleteComment = (postId) => {
    this.setState((prevState) => {
      const commentsCopy = [...prevState.comments];
      const updatedComments = commentsCopy.filter(comment => comment.id !== postId);

      return {
        comments: updatedComments,
      }
    })
  }

  addComment = () => {
    const commentToBeAdded = {
      content: this.state.comTextToBeAdded,
      id: idGenarator(),
      rating: (Math.random() * 9 + 1).toFixed(0),
    };

    this.setState((prevState) => {
      const updatedComments = [...prevState.comments, commentToBeAdded];

      return {
        comments: updatedComments,
        comTextToBeAdded: '',       
      }
    })

  }



  render() {
    const { title, content, search } = this.props;
    const {sort, comments, comTextToBeAdded} = this.state;

    const commentComponents = comments.map((comment, index) => (
      <div key={index}>
        <div className={styles.userX}>User X</div>

        <div className={styles.comment}>
          {search &&
          comment.content.toLowerCase().includes(search.toLowerCase())
            ? separateStr_1ByStr_2(comment.content, search).map(
                //the last item of the array returned by separateStr_1ByStr_2 is the original searched text
                (splittedPart, index) => {
                  const splittedCom = separateStr_1ByStr_2(
                    comment.content,
                    search
                  );
                  const originalSearchedText =
                    splittedCom[splittedCom.length - 1];

                  if (index === splittedCom.length - 2) {
                    return <span key={index}>{splittedPart}</span>;
                  } else if (index === splittedCom.length - 1) {
                    return '';
                  }

                  return (
                    <span key={index}>
                      {splittedPart}
                      <mark className={styles.search}>
                        {originalSearchedText}
                      </mark>
                    </span>
                  );
                }
              )
            : comment.content}
            <div className={styles.bottomContainer}>  
              <div className={styles.rating}>Rating {comment.rating}</div>
              <Button
              variant='danger'
              onClick={() => {this.deleteComment(comment.id)}}
              >
                Delete
              </Button>       
            </div>
        </div>
      </div>
    ));

    return (
      <div className={styles.singlePostShow}>
        <h4>{title}</h4>
        <p>{content}</p>
        <Sort sort={sort} handleSort={this.handleSort}/>
        {commentComponents}

        <InputGroup className={styles.inputGroup}>
        <Form.Control
          className={styles.formControl}
          placeholder="Add a comment..."
          value={comTextToBeAdded}
          onChange={(event) => {
            this.setState({
              comTextToBeAdded: event.target.value,
            })
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              this.addComment();
            }
          }}
        />
        <Button 
          variant="info"
          onClick={() => this.addComment()}
        >
          Comment
        </Button>
      </InputGroup>

      </div>
    );
  }
}

export default SinglePostShow;
