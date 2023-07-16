import React, { PureComponent } from 'react';
import styles from './SearchStyle.module.css';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { pool } from '../../data/postsObject';

class Search extends PureComponent {
  state = {
    search: '',
  };

  handleSubmit = () => {
    const {search} = this.state;
    const foundPosts = pool.map((post) => {
      const found = post.comments.find((comment) =>
        comment.content.toLowerCase().includes(search.toLowerCase())
      );

      if (found) {
        return post;
      }
    }).filter((post) => post);

    this.props.getFoundPosts(foundPosts, search);
  };

  render() {
    return (
      <div>
        <InputGroup>
          <Form.Control
            className={styles.formControl}
            placeholder='Search'
            onChange={(event) =>
              this.setState({
                search: event.target.value,
              })
            }
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.handleSubmit();
              }
            }}
          />

          <Button
            className={styles.search}
            variant='outline-primary'
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
