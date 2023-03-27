import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BusinessCard />
    )
}

function BusinessCard() {
    return (
        <div className="business-card">
            <ProfileImage />
            <ProfileName />
            <ProfileRole />
            <ProfilePersonalWebsite />
            <ProfileButtons />
            <ProfileAbout />
            <ProfileInterests />
            <ProfileSocialMedia />
        </div>
    )
}

function ProfileImage() {
    return (
        <div className="profile-image">
            <img src="./src/assets/img.jpg" alt="prey"></img>
        </div>
    )
}

function ProfileName() {
    return (
        <div className="profile-name">
            Ishan Agarwal
        </div>
    )
}

function ProfileRole() {
    return (
        <div className="profile-role">
            Full Stack Developer
        </div>
    )
}

function ProfilePersonalWebsite() {
    return (
        <div className="profile-personal-website">
            ishan.website
        </div>
    )
}

function ProfileButtons() {
    return (
        <div className="button-layout">

            <a href="https://gmail.com">
                <button className="button-email">
                    <span className="button-icon">
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                </button>
            </a>

            <a href="https://linkedin.com">
                <button className="button-linkedin">
                    <span className="button-icon">
                        <i className="fa-brands fa-linkedin"></i>
                    </span>
                </button>
            </a>

        </div>
    )
}

function ProfileAbout() {
    return (
        <>
            <div className="profile-about-header">
                About
            </div>
            <div className="profile-about">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                I try to keep up with security and best practices, and am always looking for new things to learn.
            </div>
        </>
    )
}

function ProfileInterests() {
    return (
        <>
            <div className="profile-interests-header">
                Interests
            </div>
            <div className="profile-interests">
                Food expert. Music scholar. Reader.
                Internet fanatic. Bacon buff. Entrepreneur.
                Travel geek. Pop culture ninja. Coffee fanatic.
            </div>
        </>
    )
}

function ProfileSocialMedia() {
    return (
        <div className="social-icon-bg">
            <span className="social-icon-instagram">
                <i className="fa-brands fa-instagram"></i>
            </span>
            <span className="social-icon-github">
                <i className="fa-brands fa-github"></i>
            </span>
        </div>
    )
}

export default App
