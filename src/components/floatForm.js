import React, { Component } from 'react'
import { IoMdClose } from 'react-icons/io';
import BlockContent from './block-content';

export default class floatForm extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            formClass: '',
            buttonClass: '',
            data: props.data,
        }

        this._toggleForm = this._toggleForm.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ buttonClass: 'show-float-form' });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _toggleForm() {
        if (this.state.formOpen) {
            if (this._isMounted) {
                this.setState({ formOpen: false, formClass: '', buttonClass: 'show-float-form' });
            }
        } else {
            this.setState({ formOpen: true, formClass: 'show-float-form', buttonClass: '' });
        }
    }

    render() {
        return (
            <div>
                <button className={`float-form-button btn ${this.state.buttonClass}`} onClick={this._toggleForm}>
                    <strong>{ this.state.data.contactFormButtonText }</strong>
                </button>
                <div className={`float-form ${this.state.formClass}`}>
                    <div className="float-form-head">
                        <button className="float-form-close" onClick={this._toggleForm}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="float-form-content">
                        <BlockContent blocks={this.state.data._rawContactFormText || []} />
                        <form method="post">
                            <input type="text" name="name" placeholder="Dit navn" />
                            <input type="email" name="email" placeholder="Din email" />
                            <input type="tel" name="tel" placeholder="Dit telefonnummer" />
                            <button className="btn" type="submit">START DIN VÆKST HER</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}