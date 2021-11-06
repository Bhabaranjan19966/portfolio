import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.setState({resumeData: JSON.parse(JSON.stringify({
      "main": {
        "name": "Tim Baker",
        "occupation": "(Your Occupation Here)",
        "description": "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
        "image": "profilepic.jpg",
        "bio": "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",
        "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
        "email": "youremailhere@gmail.com",
        "phone": "555-555-5555",
        "address": {
          "street": "(Your Street)",
          "city": "(Your City)",
          "state": "(Your State)",
          "zip": "(Your Zip/Postal Code)"
        },
        "website": "http://www.timbakerdev.com",
        "resumedownload": "http://timbakerdev.com",
        "social": [
          {
            "name": "facebook",
            "url": "http://facebook.com/tim.baker.906",
            "className": "fa fa-facebook"
          },
          {
            "name": "twitter",
            "url": "http://twitter.com",
            "className": "fa fa-twitter"
          },
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/tim-baker-8420009a/",
            "className": "fa fa-linkedin"
          },
          {
            "name": "instagram",
            "url": "http://instagram.com/tbaker_x",
            "className": "fa fa-instagram"
          },
          {
            "name": "github",
            "url": "http://github.com/tbakerx",
            "className": "fa fa-github"
          }
        ]
      },
      "resume": {
        "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
        "education": [
          {
            "school": "University?",
            "degree": "Masters in Beer tasting",
            "graduated": "April 2007",
            "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
          },
          {
            "school": "School #1 Maybe College?",
            "degree": "What did you study 101",
            "graduated": "March 2003",
            "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
          }
        ],
        "work": [
          {
            "company": "Awesome Design Studio",
            "title": "Senior UX God ",
            "years": "March 2010 - Present",
            "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
          },
          {
            "company": "Super Cool Studio",
            "title": "Junior bug fixer",
            "years": "March 2007 - February 2010",
            "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
          }
        ],
        "skills": [
          {
            "name": "Git",
            "level": "60%"
          },
          {
            "name": "Illustrator",
            "level": "55%"
          },
          {
            "name": "ReactJs",
            "level": "50%"
          },
          {
            "name": "CSS",
            "level": "90%"
          },
          {
            "name": "HTML5",
            "level": "80%"
          },
          {
            "name": "VueJs",
            "level": "50%"
          },
          {
            "name": "MongoDB",
            "level": "80%"
          }
        ]
      },
      "portfolio": {
        "projects": [
          {
            "title": "Canadian Wanderlust",
            "category": "My Travel Blog for my post-university travels",
            "image": "canadian-wanderlust.jpg",
            "url": "https://www.canadianwanderlust.com"
          },
          {
            "title": "Fury Fighting Gear",
            "category": "(offline now) A fighting gear company I started",
            "image": "fury-fighting-gear.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Original Thai Food",
            "category": "Website I built for a restaurant I like in Thailand",
            "image": "original-thai-food.jpg",
            "url": "http://www.timbakerdev.com/originalthaifood.github.io"
          },
          {
            "title": "Resume Website",
            "category": "A React based resume website template",
            "image": "resume-website.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Smirkspace",
            "category": "(MVP Only) A React and Meteor based chat University project.",
            "image": "smirkspace.jpg",
            "url": "http://www.smirkspace.com"
          }
        ]
      },
      "testimonials": {
        "testimonials": [
          {
            "text": "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user": "Kareem Abdul Jabbar"
          },
          {
            "text": "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
            "user": "Steve Wozniak... impersonator"
          }
        ]
      }
    })
    )});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
