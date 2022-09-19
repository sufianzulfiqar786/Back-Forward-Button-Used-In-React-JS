import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import '../CSS/Home.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Message from '../Components/Message'

const ActionButtons = (props) => {
    const handleBack = () => {
        props.previousStep();
    };

    const handleNext = () => {
        props.nextStep();
    };

    const handleFinish = () => {
        props.lastStep();
    };
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    return (
        <div>
            <Row>
                {props.currentStep > 1 && (
                    <Col>
                        <Button className="backButton my-4" onClick={handleBack}>Back</Button>
                    </Col>
                )}
                <Col>
                    {props.currentStep < props.totalSteps && (
                        <Button className="nextButton my-4" onClick={handleNext}>Next</Button>
                    )}
                    {props.currentStep === props.totalSteps && (
                        <Button className="nextButton my-4" onClick={handleFinish}>Finish</Button>
                    )}
                </Col>
            </Row>
        </div>
    );
};

const One = (props) => {
    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo1((info1) => ({
            ...info1,
            [targetName]: targetValue
        }));
    };

    const validate = () => {
        if (info1.name) setError("Name is mandatory field");   //   if (!info1.name) setError("Name is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info1);
        }
    };

    return (
        <div>
            <span style={{ color: "red" }}>{error}</span>

            <div className="step-inner-content">

                <span className="step1st step-no bottom-line">Step 1</span>
                <h2>What kind of Services You need?</h2>
<p>  
Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.
</p>

                <div class="step-box">
                    <div class="row my-4">

                        <div class="col-md-4">
                            <label class="step-box-content bg-white text-center relative-position">
                                <span class="step-box-icon">
                                    <img src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/d3.png" alt="" />
                                </span>
                                <span class="step-box-text">Development</span>
                                <span class="service-check-option">
                                    <span>
                                        <input className="step-box-contentRatioCircle" type="radio" name="service_name" value="Development Services" />
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div class="col-md-4">
                            <label class="step-box-content bg-white text-center relative-position">
                                <span class="step-box-icon">
                                    <img src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/d2.png" alt="" />
                                </span>
                                <span class="step-box-text">Development</span>
                                <span class="service-check-option">
                                    <span>
                                        <input className="step-box-contentRatioCircle" type="radio" name="service_name" value="Development Services" />
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div class="col-md-4">
                            <label class="step-box-content bg-white text-center relative-position">
                                <span class="step-box-icon">
                                    <img src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/d3.png" alt="" />
                                </span>
                                <span class="step-box-text">Development</span>
                                <span class="service-check-option">
                                    <span>
                                        <input className="step-box-contentRatioCircle" type="radio" name="service_name" value="Development Services" />
                                    </span>
                                </span>
                            </label>
                        </div>

                    </div>
                </div>





            </div>
            <br />
            <ActionButtons {...props} nextStep={validate} />
        </div>
    );
};

const Two = (props) => {
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo2((info2) => ({
            ...info2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if (info2.age) setError("Age is mandatory field");  // if (!info2.age) setError("Age is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info2);
        }
    };

    return (
        <div>
            <span style={{ color: "red" }}>{error}</span>
            <div className="multisteps-form__panel" data-animation="slideHorz">
                {/* div 2 */}
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 2</span>
                                <div className="step-progress float-right">
                                    <span>2 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <h2>What kind of services you are quiz?</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>

                                <div className="form-inner-area">
                                    <input type="text" name="full_name" className="form-control required" minLength="2" placeholder="First and last name *" required />
                                    <input type="email" name="email" className="form-control required" placeholder="Email Address *" required />
                                    <input type="text" name="phone" placeholder="Phone" />
                                </div>
                                <div className="gender-selection">
                                    <h3>Gender:</h3>
                                    <label>
                                        <input type="radio" name="gender" value="Male" />
                                        <span className="checkmark"></span>Male
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="Female" />
                                        <span className="checkmark"></span>Female
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/*<!-- /.inner -->*/}

                </div>
            </div>

            <br />
            <ActionButtons {...props} nextStep={validate2} />
        </div>
    );
};


const Four = (props) => {
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo2((info2) => ({
            ...info2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if (info2.age) setError("Age is mandatory field");  // if (!info2.age) setError("Age is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info2);
        }
    };


    const [list, setList] = useState([])
    const [active, setActive] = useState(null)
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setList(json))
            .catch((e) => console.log(e))
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <span style={{ color: "red" }}>{error}</span>

            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 3</span>
                                <div className="step-progress float-right">
                                    <span>3 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>What kind of services You Need</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>


                                <div className="services-select-option">

                                    {list.slice(0, 4).map((item) => {
                                        return (
                                            <li
                                                key={item.id}
                                                onClick={() => setActive(item)}
                                                className={`list-group-item ${active == item && 'active'}`}
                                            >
                                                {item.name}
                                            </li>
                                        )
                                    })}

                                </div>



                                <div className="language-select">
                                    <p>I want to browse projects in the following languages: </p>
                                    <select name="languages">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div className="comment-box">
                                    <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                    {/* <textarea name="full_comments" placeholder="Write here"></textarea> */}
                                    <Message  />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
            <ActionButtons {...props} nextStep={validate2} />
        </div>
    );
};


const Five = (props) => {
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo2((info2) => ({
            ...info2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if (info2.age) setError("Age is mandatory field");  // if (!info2.age) setError("Age is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info2);
        }
    };

    return (
        <div>
            <span style={{ color: "red" }}>{error}</span>

            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 4</span>
                                <div className="step-progress float-right">
                                    <span>4 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>What kind of services You Need</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <div className="step-content-area">
                                    <div className="budget-area">
                                        <p><i className="fas fa-dollar-sign"></i> Budget</p>
                                        <select name="budget">
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                            <option>$390 - $600</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                        <p><i className="fas fa-comments"></i> Required Support</p>
                                        <select name="support_period">
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                            <option>2 to 6 month</option>
                                        </select>
                                    </div>
                                    <div className="budget-area">
                                        <p className="budget-area-Optimization ">Optimization and Accessibility</p>
                                        <div class="box ">
                                            <div class="card ">
                                                <div class="imgBx">
                                                    <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                                                </div>
                                                <div class="details">
                                                    <h2>SomeOne Famous<br /><span>Director</span></h2>
                                                </div>
                                            </div>

                                            <div class="card   " >
                                                <div class="imgBx">
                                                    <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                                                </div>
                                                <div class="details">
                                                    <h2>SomeOne Famous<br /><span>Producer</span></h2>
                                                </div>
                                            </div>

                                            <div class="card ">
                                                <div class="imgBx">
                                                    <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                                                </div>
                                                <div class="details">
                                                    <h2>SomeOne Famous<br /><span>Actor</span></h2>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                        <textarea name="comments-note" placeholder="Your Content Here"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
            <ActionButtons {...props} nextStep={validate2} />
        </div>
    );
};


const Three = (props) => {
    console.log("step3 receive user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 5</span>
                                <div className="step-progress float-right">
                                    <span>5 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Complete Final Step</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci itaque autem numquam laboriosam, doloribus repellat incidunt dicta alias praesentium .</p>
                                <div className="step-content-field">
                                    <div className="date-picker date datepicker">
                                        {/* <div className="dataPicker ridge"> */}
                                            {/* <input className="dataPickerInput" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input> */}
                                            {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} className="dataPickerInput"/> */}
                                        {/* </div> */}
                                    </div>

<div className="fluid-container">


                                    <ul className='MovingHoverCard'>

                                        
                                        <li className='MovingHoverCardli'>
                                            <div class="MovingHoverCarddetails">
                                                <h2>MTN LP</h2>
                                                <p>$25</p>
                                                <div class="product">
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/threadless14.jpg" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className='MovingHoverCardli'>
                                            <div class="MovingHoverCarddetails">
                                                <h2>Science!</h2>
                                                <p>$25</p>
                                                <div class="product">
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/threadless12.jpg" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className='MovingHoverCardli'>
                                            <div class="MovingHoverCarddetails">
                                                <h2>Brown</h2>
                                                <p>$25</p>
                                                <div class="product">
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/threadless13.jpg" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    </div>


                                    <div id="container">

                                        <div class="product-details ">

                                            <h1 className="d-flex justify-content-center my-1">Lorem ipsum</h1>
                                            <span class="hint-star star ">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                            </span>

                                            <p class="information text-justify">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos vel quod minus dolores ex eum commodi totam quidem doloribus libero necessitatibus modi laboriosam, optio placeat aliquid itaque voluptatum quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi corporis asperiores excepturi."</p>



                                            <div class="control">

                                                <button class="btnStep5Hover1stCard">
                                                    <span class="price">$250</span>
                                                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                                    <span class="buy">Get now</span>
                                                </button>

                                            </div>

                                        </div>

                                        <div class="product-image">

                                            <img src="https://ivy.premiumblindsuk.com/product/coverimage/630f40fb0de9d.webp" alt="" />


                                            <div class="info">
                                                <h2> Description</h2>
                                                <ul>
                                                    <li><strong>Height : </strong>5 Ft </li>
                                                    <li><strong>Shade : </strong>Olive green</li>
                                                    <li><strong>Decoration: </strong>balls and bells</li>
                                                    <li><strong>Material: </strong>Eco-Friendly</li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                    {/* <div className="plan-area">
                                        <div className="plan-icon-text text-center active">
                                            <div className="plan-icon">
                                                <i className="fas fa-chess-queen"></i>
                                            </div>
                                            <div className="plan-text">
                                                <h3>Unlimited Plan</h3>
                                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                <input type="radio" name="your_plan" value="Unlimited Plan" defaultChecked />
                                            </div>
                                        </div>
                                        <div className="plan-icon-text text-center">
                                            <div className="plan-icon">
                                                <i className="fas fa-cubes"></i>
                                            </div>
                                            <div className="plan-text">
                                                <h3>Limited Plan</h3>
                                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
                                                <input type="radio" name="your_plan" value="Unlimited Plan" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="budget-area">
                                        <p>Optimization and Accessibility</p>
                                        <div className="opti-list">
                                            <ul className="d-md-flex">
                                                <li className="bg-white active"><input type="checkbox" name="code_opti1" value="Semantic coding" defaultChecked />Semantic coding</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti2" value="Mobile APP" />Mobile APP</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti3" value="Mobile Design" />Mobile Design</li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="comment-box">
                                        <textarea name="extra-message" placeholder="Some Note"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <br />
            <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
    );
};



const Home = () => {

    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);

    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    const assignUser = (val) => {
        console.log("parent receive user callback");
        console.log(val);
        setUser((user) => ({
            ...user,
            ...val
        }));
    };

    const handleStepChange = (e) => {
        console.log("step change");
        console.log(e);
        setActiveStep(e.activeStep - 1);
    };

    const handleComplete = () => {
        alert("You r done. TQ");
    };

    return (
        <>

            <div className="fluid-container">

                <div className="row row1st m-0 p-0 " id="row1st">

                    <div className="col-3 m-0 p-0 position-fixed">

                        <img className='ImageFullScreenColumn' src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/side-img.jpg" alt=""

                        />

                    </div>

                    <div className="Column2nd col-9 ">

                        <div>
                            <Stepper activeStep={activeStep}>
                                <Step label="Step 1" children={<MdDescription />} />
                                <Step label="Personal Detail" />
                                <Step label="Personal Detail" />
                                <Step label="Personal Detail" />
                                <Step label="Confirmation" />
                            </Stepper>
                            {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
                            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
                                <One userCallback={assignUser} />
                                <Two user={user} userCallback={assignUser} />
                                <Four user={user} userCallback={assignUser} />
                                <Five user={user} userCallback={assignUser} />
                                <Three user={user} completeCallback={handleComplete} />
                            </StepWizard>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Home
