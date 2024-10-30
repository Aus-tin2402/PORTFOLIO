import React from 'react'
import './CSS/project.css'
import Crud from '../assets/Crud.jpeg'
import Image from '../assets/Image_Upload.png'
import Bank from '../assets/Bank.jpeg'
import Credentials from '../assets/Credential.jpeg'
import Student from '../assets/Student.png'
const Project = () => {
  return (
    <>
      <header className="project" id="project">
        <article className="project-container">
          <div className="project-section">
            <div className="img">
              <img src={Crud} alt="Crud_Operation_Image" />
            </div>
            <div className="name">
              <h1>crud operation</h1>
            </div>
            <ul className="technologies">
              <li>React.js</li>
              <li>node.js</li>
              <li>express.js</li>
              <li>mongo db</li>
              <li>git/github</li>
            </ul>
            <aside className="description">
              <p>A full-stack application built with MongoDB, Express.js, React, and Node.js (MERN stack) to demonstrate CRUD operations. Users can create, read, update, and delete data entries, showcasing the core functions of data manipulation in a responsive web application.</p>
            </aside>
            <div className="view">
              <a href="" target='_blank'>view</a>
            </div>
          </div>
          <div className="project-section">
            <div className="img">
              <img src={Image} alt="Image_Upload" />
            </div>
            <div className="name">
              <h1>Image Upload </h1>
            </div>
            <ul className="technologies">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>MySql</li>
              <li>git/github</li>
            </ul>
            <aside className="description">
              <p>A web application that allows users to upload, view, edit, and delete images, demonstrating file management capabilities. Built with a CRUD architecture, it allows efficient image handling and retrieval for creating image-based galleries or document management systems.</p>
            </aside>
            <div className="view">
              <a href="" target='_blank'>view</a>
            </div>
          </div>
          <div className="project-section">
            <div className="img">
              <img src={Bank} alt="Bank_Image" />
            </div>
            <div className="name">
              <h1>Bank Management System </h1>
            </div>
            <ul className="technologies">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>MySql</li>
              <li>git/github</li>
            </ul>
            <aside className="description">
              <p>A robust application designed to manage essential banking functions. This system includes customer account creation, balance checks, deposits, withdrawals, and transaction histories. It provides secure and efficient management of customer data and financial transactions.</p>
            </aside>
            <div className="view">
              <a href="" target='_blank'>view</a>
            </div>
          </div>
          <div className="project-section">
            <div className="img">
              <img src={Credentials} alt="Credentials_Image" />
            </div>
            <div className="name">
              <h1>Credentials Management System </h1>
            </div>
            <ul className="technologies">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>MySql</li>
              <li>git/github</li>
            </ul>
            <aside className="description">
              <p>A secure platform that helps users store and manage their sensitive information, like usernames and passwords. With encryption and strong access controls, it ensures that confidential credentials are securely stored and accessible only to authorized users.</p>
            </aside>
            <div className="view">
              <a href="" target='_blank'>view</a>
            </div>
          </div>
          <div className="project-section">
            <div className="img">
              <img src={Student} alt="Student_Image" />
            </div>
            <div className="name">
              <h1>Student Management System </h1>
            </div>
            <ul className="technologies">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>MySql</li>
              <li>git/github</li>
            </ul>
            <aside className="description">
              <p>A comprehensive application for managing student data, including registration, academic records, and personal information. It provides features for adding, updating, viewing, and deleting student profiles, simplifying the management of student information for educational institutions.</p>
            </aside>
            <div className="view">
              <a href="" target='_blank'>view</a>
            </div>
          </div>
        </article>
      </header>
    </>
  )
}

export default Project