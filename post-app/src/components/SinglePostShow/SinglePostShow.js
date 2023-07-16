import React, { PureComponent } from 'react';
import styles from './SinglePostShowStyle.module.css';
import separateStr_1ByStr_2 from '../../helpers/separateStr_1ByStr_2';

class SinglePostShow extends PureComponent {
  render() {
    const { title, content, comments, search } = this.props;

    const commentComponents = comments.map((comment, index) => (
      <div key={index}>
        <span className={styles.userX}>User X:</span>
        <span className={styles.comment}>
          {search &&
          comment.content.toLowerCase().includes(search.toLowerCase())
            ? separateStr_1ByStr_2(comment.content, search).map(
                //the last item of the array returned by separateStr_1ByStr_2 original searched text
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
        </span>
      </div>
    ));

    return (
      <div className={styles.singlePostShow}>
        <h4>{title}</h4>
        <p>{content}</p>
        {commentComponents}
      </div>
    );
  }
}

export default SinglePostShow;
