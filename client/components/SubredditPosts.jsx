import React from 'react';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class SubredditPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {fetchPosts, subreddit} = this.props;
        return (
            <div>
            Subreddit posts
            <br/>
            <button onClick={fetchPosts}>Fetch posts</button>
            {subreddit.data ? subreddit.data.children
                .slice(0,5)
                .map(entry => entry.data)
                .map((post, i) =>
                <p key={i}>
                    {post.title}
                </p>) : ''}
            </div>
        );
    }
}

SubredditPosts.propTypes = {
    fetchPosts: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => {
            const config = {mode: 'cors'};
            return fetch('https://www.reddit.com/r/java.json', config)
                .then(response => response.json())
                .then(json => dispatch({ type: 'DATA_FETCHED', data: json}));
        }
    };
};

const mapStateToProps = state => {
    const {subreddit} = state.subreddit;
    return {
        subreddit: state.subreddit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubredditPosts);
