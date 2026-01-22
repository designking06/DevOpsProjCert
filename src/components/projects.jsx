import React from 'react';

export default function Projects ({}) {
    return (
        <section id="projects" class="section">
            <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="row g-4">
                <div class="col-md-4">
                <div class="project-card">
                    <h5>Client Management Platform</h5>
                    <p>Drupal-based system for law firms with role-based access.</p>
                </div>
                </div>
                <div class="col-md-4">
                <div class="project-card">
                    <h5>Inventory Tool</h5>
                    <p>Cloud-hosted CRUD app with CI/CD pipeline.</p>
                </div>
                </div>
                <div class="col-md-4">
                <div class="project-card">
                    <h5>React Portfolio</h5>
                    <p>Static frontend deployed via AWS S3 + CloudFront.</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}