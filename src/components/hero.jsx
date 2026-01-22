import React from 'react';

export default function Hero ({pageTitle = "Caleb's React Portfolio"}) {
    return (
        <section class="hero d-flex align-items-center">
            <div class="container text-center">
            <h1 class="hero-title">{pageTitle}</h1>
            <p class="hero-subtitle">
                Full Stack Engineer · Drupal · React · Cloud & DevOps
            </p>
            <div class="hero-actions">
                <a href="#projects" class="btn btn-primary btn-lg">View Work</a>
                <a href="#contact" class="btn btn-outline-light btn-lg ms-3">Contact Me</a>
            </div>
            </div>
        </section>
    )
}