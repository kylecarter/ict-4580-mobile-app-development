'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Src > Components
import { Selectlist, Textfield } from '../../components/Fields'

const _ = underscore;
export default class Styleguide extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend( {}, props );
    }

    render() {
        const { activeID, expose, navigation } = this.state;
        return (<div className="styleguide">
            <header className="styleguide--heading styleguide--section"><div className="container">
                <h1 className="page-title"> Styleguide </h1>
            </div></header>
            <section className="styleguide--section__swatches"><div className="container">
                <h2>Colors</h2>
                <ul className="list-swatches row">
                    <li className="col-1 swatch primary">
                        <span className="sr-only">#5a76c0</span>
                    </li>
                    <li className="col-1 swatch secondary">
                        <span className="sr-only">#019ae8</span>
                    </li>
                    <li className="col-1 swatch tertiary">
                        <span className="sr-only">#db4437</span>
                    </li>
                    <li className="col-1 swatch text-color">
                        <span className="sr-only">#26252b</span>
                    </li>
                    <li className="col-1 swatch white">
                        <span className="sr-only">#ffffff</span>
                    </li>
                </ul>
            </div></section>
            <section className="styleguide--section__headings">
                <h2 className="container">Headings</h2>
                <div className="container"><div className="row">
                    <h1 className="col-1">h1</h1>
                    <h2 className="col-1">h2</h2>
                    <h3 className="col-1">h3</h3>
                    <h4 className="col-1">h4</h4>
                    <h4 className="col-1">h4</h4>
                    <h5 className="col-1">h5</h5>
                    <h6 className="col-1">h6</h6>
                    <div className="col-1"><p className="h1">.h1</p></div>
                    <div className="col-1"><p className="h2">.h2</p></div>
                    <div className="col-1"><p className="h3">.h3</p></div>
                    <div className="col-1"><p className="h4">.h4</p></div>
                    <div className="col-1"><p className="h4">.h4</p></div>
                    <div className="col-1"><p className="h5">.h5</p></div>
                    <div className="col-1"><p className="h6">.h6</p></div>
            </div></div></section>
            <section className="styleguide--section__copy"><div className="container">
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
                <ol>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ol>
            </div></section>
            <section className="styleguide--section__forms">
                <form action="" className="container">
                    <div className="form-content">
                        <div className="form-row form-textfield">
                            <input type="text" id="example-textfield" className="form-control" required />
                            <label htmlFor="example-textfield" className="required">Example Textfield</label>
                        </div>
                        <div className="form-row form-textarea">
                            <label htmlFor="example-textarea">Example Textarea</label>
                            <textarea name="" id="example-textarea" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="form-row custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="example-checkbox" />
                            <label className="custom-control-label" htmlFor="example-checkbox">Example Checkbox</label>
                        </div>
                        <div className="form-row custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="example-radio" />
                            <label className="custom-control-label" htmlFor="example-radio">Example Radio</label>
                        </div>
                        <Selectlist id={'example-selectlist'} required={false} options={[
                            { value: 'opt-1', label: 'Option 1', selected: false },
                            { value: 'opt-2', label: 'Option 2', selected: false },
                            { value: 'opt-3', label: 'Option 3', selected: false },
                        ]} />
                    </div>
                </form>
            </section>
            <section className="styleguide--section__toolbars">
            </section>
            <section className="styleguide--section__cards">
            </section>
            <section className="styleguide--section__popups">
            </section>
            <section className="styleguide--section__listicles">
            </section>
        </div>);
    }
}
