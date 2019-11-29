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
                    {/* <strong>{ this.state.data.contactFormButtonText }</strong> */}
                    <img className="img-fluid"
                    src="//fc-use1-00-pics-bkt-00.s3.amazonaws.com/90d3c4b96f2431e9f2198d421d3b70dfdc23ad21433ee8b3e1a1a6ca3dea8d6d/f_faq-image/u_4439b25a537ad6dde667c9e6166554a7fb27ac99f7d18f4ed00100d6f8f827a7/img_1543253474352.png" 
                    alt="button-icon"
                    />
                </button>
                <div className={`float-form ${this.state.formClass}`}>
                    <div className="float-form-head">
                        <button className="float-form-close" onClick={this._toggleForm}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="float-form-content">
                        <BlockContent blocks={this.state.data._rawContactFormText || []} />
                        <form 
                            name="contact" 
                            method="post"
                            data-netlify="true"
                        >
                            <input type="text" name="name" placeholder="Dit navn" />
                            <input type="email" name="email" placeholder="Din email" />
                            <input type="text" name="phone" placeholder="Dit telefonnummer" />
                            <button className="btn" type="submit">START DIN VÆKST HER</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}