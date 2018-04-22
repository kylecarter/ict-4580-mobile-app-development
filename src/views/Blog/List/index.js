'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class List extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article className="container">
            <header className="marquee">
                <h1 className="page-title">Blog <span className="text-warning">\</span></h1>
            </header>
            <section className="content" id="content">
                <ul className="list-unstyled row">
                    <li className="col-lg-12 featured">
                        <div className="featured-post">
                            <div className="row">
                                <div className="d-none d-md-block d-lg-block d-xl-block col-md-3"><img className="img-responsive" src="/img/blog-featuredpost.jpg" alt="featured blog post"/></div>
                                <div className="col-md-9">
                                    <h2>Blog Post</h2>
                                    <time className="text-muted">April 22, 2018</time>
                                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                                    <a className="btn btn-primary" href="/blog/post/1" rel="bookmark">Read</a>
                                </div>
                            </div>
                        </div>
                     </li>
                    <li className="col-lg-3">
                        <div className="card">
                            <img src="/img/blog-thumbnail.jpg" alt="blog featured image" />
                            <div className="card-body">
                                <h2 className="h5 card-title">Blog Post</h2>
                                <time className="text-muted">April 22, 2018</time>
                                <p className="card-text">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-text"><small className="text-muted"><a href="/blog/post/1" rel="bookmark">Read</a></small></p>
                            </footer>
                        </div>
                    </li>
                    <li className="col-lg-3">
                        <div className="card">
                            <img src="/img/blog-thumbnail.jpg" alt="blog featured image" />
                            <div className="card-body">
                                <h2 className="h5 card-title">Blog Post</h2>
                                <time className="text-muted">April 22, 2018</time>
                                <p className="card-text">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-text"><small className="text-muted"><a href="/blog/post/1" rel="bookmark">Read</a></small></p>
                            </footer>
                        </div>
                    </li>
                    <li className="col-lg-3">
                        <div className="card">
                            <img src="/img/blog-thumbnail.jpg" alt="blog featured image" />
                            <div className="card-body">
                                <h2 className="h5 card-title">Blog Post</h2>
                                <time className="text-muted">April 22, 2018</time>
                                <p className="card-text">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-text"><small className="text-muted"><a href="/blog/post/1" rel="bookmark">Read</a></small></p>
                            </footer>
                        </div>
                    </li>
                    <li className="col-lg-3">
                        <div className="card">
                            <img src="/img/blog-thumbnail.jpg" alt="blog featured image" />
                            <div className="card-body">
                                <h2 className="h5 card-title">Blog Post</h2>
                                <time className="text-muted">April 22, 2018</time>
                                <p className="card-text">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-text"><small className="text-muted"><a href="/blog/post/1" rel="bookmark">Read</a></small></p>
                            </footer>
                        </div>
                    </li>
                </ul>
            </section>
        </article>);
    }
}
