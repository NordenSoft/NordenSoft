import React, { Component } from 'react'
import { IoMdClose } from 'react-icons/io';

export default class floatForm extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            formOpen: false,
            formClass: '',
            buttonClass: '',
        }
  
        this._toggleForm = this._toggleForm.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted){
            this.setState({ buttonClass: 'show-float-form' });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _toggleForm() {
        if(this.state.formOpen){
            if (this._isMounted) {
                this.setState({ formOpen: false, formClass: '', buttonClass: 'show-float-form' });
            }
        }else {
            this.setState({ formOpen: true, formClass: 'show-float-form', buttonClass: '' });
        }   
    }

    render() {
        return (
            <div>
                <button className={`float-form-button btn ${this.state.buttonClass}`} onClick={this._toggleForm}>
                    <strong>VIL DU GERNE HAVE FLERE KUNDER?</strong>
                </button>
                <div className={`float-form ${this.state.formClass}`}>
                    <div className="float-form-head">
                        <button className="float-form-close" onClick={this._toggleForm}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="float-form-content">
                        <span className="pb-3">VIL DU <strong>VÆKSTE</strong> DIN <strong>FORRETNING </strong>ONLINE?</span>
                        <p>Jeg hedder Matias Askvig og er ejer af HelloSEO.</p>
                        <p>Skriv til mig her, så kontakter jeg dig inden for 24 timer med henblik på at give dig <strong>gratis input</strong> til vækst med SEO.</p>
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