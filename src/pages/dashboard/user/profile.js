import { useState } from "react"
import styled from "styled-components"
import UserHeader from "../../../Components/Dashboard/User/Header"
import { getUserIssues } from "../../../utils/issuesAPI";

function Profile() {

  const [issues, setIssues] = useState(null);

  async function getIssues() {
    const data = await getUserIssues();
    setIssues(data);
    console.log(issues)
  }

  return (
    <div>
      <UserHeader />
      <Wrapper>
        <div className="accordion-wrap">
          <div className="accordion">
            <a href="#" className="active"><i className="fa fa-user"></i> Profile</a>
            <div className="sub-nav active">
              <div className="html about-me">
                <div className="photo">
                </div>
                <h4>Name </h4>
              </div>
            </div>
            <a href="#"><i className="fa fa-comments"></i>Faculty ID</a>
            <a href="#"><i className="fa fa-comments"></i>Department ID</a>
            <a href="#"><i className="fa fa-envelope"></i> Issue history</a>
            <div className="sub-nav">
              <a onClick={getIssues}>Fetch issues</a>
            </div>
          </div>
        </div>
        <Side>
          {issues ?
            <>{
              issues.map(value =>
              (
                <div key={value.id} className='sidediv'>
                  <p><strong>Acession Number: </strong> {value.acc_no}</p>
                  <p><strong>Date Issues: </strong> {value.date_issued}</p>
                  <p><strong>Due Date: </strong> {value.due_date}</p>
                </div>
              )
              )
            }
            </>

            : <div>Nothing to display</div>
          }
        </Side>
      </Wrapper>
    </div>
  )
}

export default Profile


const Side = styled.div`

  .sidediv{
    background: #eee;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
`

const Wrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 4fr;

.accordion-wrap {
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    height: 100%;
    position: relative;
  }

  .accordion {
    width: 100%;
    margin: auto;
    max-width: 280px;
    overflow: hidden;
    border-radius: 3px;
    background: #B7AFA3;
  }

  .accordion>a {
    color: #374046;
    padding: 15px;
    display: block;
    text-decoration: none;
    transition: all .3s ease-in-out 0s;
  }

  .accordion>a:hover,
  .accordion>a.active {
    background: #E8D0A9;
  }

  .accordion>a.active {
    font-weight: 200;
    color: #493008;
  }



  .accordion .sub-nav.open {
    display: block;
  }

  .accordion .sub-nav a {
    display: block;
    color: inherit;
    font-weight: 300;
    padding: 10px 15px;
    text-decoration: none;
    transition: all .2s ease-in-out 0s;
  }

  .accordion .sub-nav a:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .accordion .sub-nav a:hover {
    background: #ecc085;
    box-shadow: 5px 0 0 #633b08 inset;
  }

  .accordion .html {
    padding: 15px;
  }

  .accordion .about-me {
    text-align: center;
    position: relative;
  }

  .accordion .about-me h4 {
    margin-bottom: 0;
  }

  .accordion .about-me .photo {
    width: 95px;
    height: 95px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: 4px solid rgb(73, 32, 4);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .19), 0 8px 17px 0 rgba(0, 0, 0, .2);
    background: url('/images/teacher.jpg') no-repeat center;
    background-size: 95px 95px;
  }
`