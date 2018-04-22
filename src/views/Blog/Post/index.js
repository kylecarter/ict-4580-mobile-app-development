'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Post extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article className="container">
            <header className="marquee">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page"><a href="/" rel="bookmark">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a href="/blog" rel="bookmark">Blog</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog Post</li>
                    </ol>
                </nav>
                <h1 className="page-title">Blog Post</h1>
                <cite className="text-muted">Kyle A. Carter</cite>
                <time className="text-muted">April 18, 2018</time>
            </header>
            <div className="row">
                <div className="col-lg-8">
                    <div className="content">
                        <figure className="featured-img">
                            <img src="/img/blog-featuredimg.jpg" alt="featured image" className="img-responsive"/>
                            <figcaption className="text-muted p">
                                <small>Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette.</small>
                            </figcaption>
                        </figure>
                        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                        <h2>Lorem Ipsum</h2>
                        <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.</p>
                        <h2>Lorem Ipsum</h2>
                        <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                        <p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>
                        <h3>Lorem Ipsum</h3>
                        <p>Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.</p>
                        <p>Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar">
                        <div className="card bg-dark text-white">
                            <img src="/img/blog-advertimg.jpg" alt="advert background" className="card-img"/>
                            <div className="card-img-overlay">
                                <h3 className="h5 card-title">Advert</h3>
                                <p className="card-text">Catsear cauliflower garbanzo yarrow</p>
                                <a href="/" className="btn btn-primary" rel="bookmark">Learn More</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>);
    }
}
