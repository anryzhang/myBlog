/**
 * Created by ziyu on 16/3/17.
 */

import React from 'react';


const TestAjax = React.createClass({
    getInitialState() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
    componentDidMount() {
        this.props.url.then(
            value => this.setState({
                loading: false,
                data: value
            }),
            error => this.setState({
                loading: false,
                error: error
            })
        );
    },

    render() {
        if (this.state.loading) {
            return (
                <span>loading...</span>
            );
        } else if (this.state.error !== null) {
            return (
                <span>error:{this.state.error.message}</span>
            );
        } else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo) {
                return <RenderList key={repo.id} repo={repo}/>;
            });

            return (
                <div>
                    <ol>{repoList}</ol>
                </div>
            );

        }

    }
});

const RenderList = React.createClass({
    render() {
        var repo = this.props.repo;
        var style = {
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px'
        };
        return (
            <li style={style}>
                <a href={repo.html_url}>{repo.name}</a>({repo.stargazers_count} start)
                <br />
                {repo.description}
            </li>
        );
    }
});


export default TestAjax;
