import React, { useEffect, useState } from 'react'
import { Card, Button, Input, Switch, Form } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"
import './JobEditPage.css';
import {updateJobOfferById} from '../../utils/drafts/jobOffer.utils'
import { useLocation } from 'react-router-dom'

export default function JobEditPage() {
    const { TextArea } = Input;

    const [cardType, setCardType] = useState(false)
    const [jobOffers, setJobOffers] = useState([])
    const [jobData, setJobData] = useState(
        {
            uploadedBy: "",
            jobTitle: "",
            position: "",
            emailHr: "",
            company: "",
            location: "",
            jobDescription: "",
            workRequirements: "",
            notes: "",
            isOpen: true,
            isHidden: true,
        }
    )

    const location: any = useLocation();
    const JobObject: any = location.state?.jobData;
    console.log(JobObject);


    function statusToggel(checked: boolean) {
        console.log(`switch to ${checked}`);
        setJobData({ ...jobData, isOpen: checked })

    }

    function changeCardType() {
        if (cardType === false) { setCardType(true) }
        else { setCardType(false) }
    };
function updateJobOffer(){
    updateJobOfferById(jobData, JobObject._id )
}
  // updateJobOfferById({ isHidden: true }, "60b7bc72095e2d0900d81eb1", token).then(data => console.log(data))
    return (
        (!cardType) ?
            <div>

                <JobCardsHeader />

                <div className="site-card-border-less-wrapper">


                    <Card id="showCard" title={''} bordered={false} style={{ width: 700 }}>

                        <div className="JobRequirement">
                            <h2>{JobObject.position}</h2>
                            <h3>{JobObject.jobDescription}</h3>
                            <p>{JobObject.minYearsOfExperience} שנות ניסיון</p>
                            <p>זמינות: {JobObject.status}</p>
                        </div>
                        <div className="jobDetails">
                            <p>{JobObject.notes} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam, officiis velit consequatur quidem at, cupiditate aspernatur molestias commodi ab dolorum fugiat nam blanditiis tenetur omnis dolores cumque, libero dolorem.</p>
                        </div>
                        <div className="btns">
                            <Button type="primary" onClick={changeCardType}>ערוך</Button>
                            <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                        </div>
                    </Card>

                </div>
            </div>

            :

            <div>

                <JobCardsHeader />

                <div className="site-card-border-less-wrapper">



                    <Card id="editCard" title={JobObject.position} bordered={false}>
                        <Form>
                            <div className="JobDetails">

                                <div className="allInputClass">
                                    <Input placeholder="Name" onChange={e => setJobData({ ...jobData, uploadedBy: e.target.value })} defaultValue={JobObject.position} />
                                </div>

                                <div className="allInputClass">
                                    <Input placeholder="Email" onChange={e => setJobData({ ...jobData, emailHr: e.target.value })} defaultValue={JobObject.emailHr} />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder={JobObject.company} onChange={e => setJobData({ ...jobData, company: e.target.value })} defaultValue={JobObject.company} />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Position" onChange={e => setJobData({ ...jobData, position: e.target.value })} defaultValue={JobObject.position} />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Work Requirements" onChange={e => setJobData({ ...jobData, workRequirements: e.target.value })} defaultValue={JobObject.workRequirements} />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="location" onChange={e => setJobData({ ...jobData, location: e.target.value })} defaultValue={JobObject.location} />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Notes" onChange={e => setJobData({ ...jobData, notes: e.target.value })} defaultValue={JobObject.notes} />
                                </div>
                                <div className="allInputClass">
                                    <h5>סטטוס:</h5>
                                    <Switch defaultChecked onChange={statusToggel}
                                        checkedChildren="פתוח" unCheckedChildren="סגור"
                                    />
                                </div>

                                <div className="jobDetails">
                                    <TextArea showCount maxLength={100} onChange={e => setJobData({ ...jobData,jobDescription : e.target.value })} placeholder="Job description" />
                                </div>

                                <div className="btns">
                                    <Button type="primary" onClick={updateJobOffer}>שמור</Button>
                                    <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                                </div>
                            </div>
                        </Form>

                    </Card>
                </div>
            </div>
    )
}
