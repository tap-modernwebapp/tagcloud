import React, { Component } from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

var ReactDOM = require('react-dom');
var $ = require('jquery');

import { TagCloud } from 'react-tagcloud';
import WordCloud from 'react-d3-cloud';

var myData = require('./test2.json');

console.log(JSON.stringify(myData, null, 2));

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');

/*
var data = [
  { value: "JavaScript", count: 0.35, docid: 123 },
  { value: "React", count: 0.48 },
  { value: "Nodejs", count: 0.2 },
  { value: "Express.js", count: 0.25 },
  { value: "HTML5", count: 0.35 },
  { value: "MongoDB", count: 0.2 },
  { value: "CSS3", count: 0.8 }
];
*/

const shareUrl = 'http://github.com';
const title = 'GitHub';

var BugShare = React.createClass ({
  render: function() {
    console.log("Rendering BugShare");
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
      </div>

      <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
       </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
	</div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
	</div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
	</div>

 	<div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
	</div>
</div>
    )
  }
});

var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <div>A way to filter the list of bugs would come here.</div>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    console.log("Rendering BugRow:", this.props.bug);
    return (
      <tr>
        <td>{this.props.bug._id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
	<td>{this.props.bug.description}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    console.log("Rendering bug table, num items:", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function(bug) {
      return <BugRow key={bug._id} bug={bug} />
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Description</th>
	  </tr>
        </thead>
        <tbody>
          {bugRows}
        </tbody>
      </table>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    console.log("Rendering BugAdd");
var link = "https://github.com/olahol/react-social/", facebookAppId = "yourFacebookAppId", message = "React Social!";
    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    return (
      <div>
        <form name="bugAdd">
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
	  <input type='text' name="description" placeholder="Enter your description here" />
          <button onClick={this.handleSubmit}>Add Bug</button>
        </form>
      </div>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({owner: form.owner.value, title: form.title.value, description: form.description.value, status: 'New', priority: 'P1'});
    // clear the form for the next input
    form.owner.value = ""; form.title.value = ""; form.description.value = "";
  }
});


function test2(data) {

    return (
    <table>
    <TagCloud minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.docid}' was selected!`)} />
    </table>
    )

}

var BugCloud = React.createClass({
render: function() {
console.log("Rendering BugCloud");

var data = [];
var datas = [];
var labels = [];

for (var i = 0; i < myData.cluster.length; i++) {

console.log(myData.cluster.length);
console.log("i :" +  i);
console.log("looping label is : " + myData['cluster'][i]["label"]);

for (var k in myData['cluster'][i]["terms"]) {

console.log(k + ": Word is " + myData['cluster'][i]["terms"][k]["word"] + " & weight is " + myData['cluster'][i]["terms"][k]["weight"] + '\n');

var myObj = {
    value : myData['cluster'][i]["terms"][k]["word"],    //your word variable
    count : myData['cluster'][i]["terms"][k]["weight"] //your weight variable
};

data.push(myObj);
}

//data.splice( 100, 0, myData['cluster'][i]["label"] );
//data.push(myData['cluster'][i]["terms"]);

datas.push(data);
//labels.push(myData['cluster'][i]["label"]);

console.log("data array contains" + data);

data = [];
}

const DisplayTagClouds = datas.map(cloud => <div><Tooltip content="Yes, the default one"><TagCloud minSize={12}
            maxSize={35}
            tags={cloud}
            onClick={tag => alert(`'${tag.docid}' was selected!`)} /> </Tooltip>
<hr/></div>
);

return (<div>{DisplayTagClouds}</div>);
//return (<div><Tooltip content="Yes, the default one">Test for mouseover</Tooltip></div>);

//console.log(cluster1.length);
//return null;
}
});

var BugList = React.createClass({
  getInitialState: function() {
    return {bugs: []};
  },
  render: function() {
    console.log("Rendering bug list, num items:", this.state.bugs.length);
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugShare />
	<hr />
	<BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd addBug={this.addBug} />
        <hr />
        <BugCloud />
      </div>
    )
  },

componentDidMount: function() {
    $.ajax('/api/bugs').done(function(data) {
      this.setState({bugs: data});
    }.bind(this));
    // In production, we'd also handle errors.
  },

  addBug: function(bug) {
    console.log("Adding bug:", bug);
    $.ajax({
       type: 'POST', url: '/api/bugs', contentType: 'application/json',
       data: JSON.stringify(bug),
       success: function(data) {
        var bug = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var bugsModified = this.state.bugs.concat(bug);
        this.setState({bugs: bugsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding bug:", err);
}
})
   
  }
});

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
