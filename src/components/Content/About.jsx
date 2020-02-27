import React from "react";

export default function About(){
    return (
        <div className="content text-justify">
            <h1>About me</h1>
            <div className="about">
            <p>I always been interested in improving work processes and to find quick solution for repetitive tasks. Throughout my work experience I enjoyed most when I worked on automatizing job functions and I was always looking for new tools to make this possible.</p>
            <p>When I came across an afternoon “Introduction to Python” course I got immediately intrigued. I heard Python is great tool to automate tasks and is a very good for first language to learn.</p>
            <p>That afternoon absolutely changed the way I was looking at programming. I learnt that writing code is about solving problems, eliminating repetitions from the workflow and automate the boring, administrative bits. I was amazed by what can be achieved by writing code and left the lesson inspired, wanting to learn more.</p>    
            <br />
            <p>I slowly started to learn the basic concepts and build simple programs and the success from these little programs was motivating me to learn more. After going through a webcourse on W3Schools, I have started to ask friends to send me Python programming tasks so I can practise my new skills.</p>
            <p>I got some exercise to process data from an S3 bucket, write Lambda functions, then to use Cognito and DynamoDB. Later I learnt how to connect the resources in a Cloudformation schema so the whole infrastructure behind the website can be built with code. I am absolutely amazed by the endless possibilities Serverless can provide.</p>
            <p>I enjoy figuring out the logic behind a program and see how everything works together. It's very interesting to see how the cloud is used to solve business problems and make strategic impact on the organisation</p>
            <br />
            <p>To better understand the backend I was building I started to learn about the basics of front end which resulted in this website. Though creating frontend is not what I am the most interested at it is great to see how everything is connected and it gave me useful insight to build better code.</p>
            </div>
            <div>
            <br />
            <p>During my journey I came across and used below listed tools (the ones highlighted have also been used to build this website):</p>
            <p>AWS:</p>
            <ul>
                <li><strong>Cloudformation</strong>: I have built cloudformation template with various resources (API Gateway, Lambda, DynamoDB, Cognito, RDS, S3, SQS)</li>
                <li><strong>API Gateway</strong></li>
                <li><strong>Lambda</strong></li>
                <li><strong>Cognito</strong></li>
                <li><strong>DynamoDB</strong></li>
                <li><strong>SNS</strong></li>
                <li><strong>S3</strong></li>
                <li>RDS</li>
                <li>SQS</li>
                <li>EC2</li>
                <li><strong>Amplify</strong></li>
                <li><strong>Route53</strong></li>
            </ul>
            <p>HTML, CSS, JavaScript</p>
            <p><strong>Bootstrap</strong></p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p><strong>React</strong></p>
            </div>
            <br />
            <div className="about-bottom">
            <p>Currently I'm working on improving my testing skills and learning about CI/CD (CircleCi)</p>
            </div>
        </div>
    )
}
