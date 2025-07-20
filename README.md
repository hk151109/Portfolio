# Harikrishnan Gopal - Portfolio Website

This is the repository for my personal portfolio website, showcasing my skills, projects, and experience as a software engineer. The website is built with Next.js and deployed on Google App Engine.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Sections:**
    *   **Home:** A brief introduction about me.
    *   **About:** A more detailed description of my background and skills.
    *   **Experience:** My professional work experience.
    *   **Projects:** A collection of my projects with links to their repositories and live demos.
    *   **Contact:** A form to get in touch with me.
*   **Animations:** Smooth animations and transitions using Framer Motion.
*   **Theme Switcher:** A theme switcher to toggle between light and dark mode.

## Tech Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
    *   [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
    *   [Framer Motion](https://www.framer.com/motion/) - A library for animations in React.
*   **Deployment:**
    *   [Google App Engine](https://cloud.google.com/appengine) - A fully managed, serverless platform for developing and hosting web applications at scale.
    *   [Google Cloud Build](https://cloud.google.com/build) - A service that executes your builds on Google Cloud Platform's infrastructure.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/hk151109/Portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```
4. For Build
   ```sh
   npm run build
   ```
5. Production server
   ```sh
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Google App Engine

The `app.yaml` file configures the application for deployment on Google App Engine.

```yaml
# This file configures a Next.js application for deployment on Google App Engine.

runtime: nodejs22

# Handlers define how App Engine routes requests to your application.
handlers:
  - url: /_next/static
    static_dir: .next/static
  - url: /.*
    script: auto
    secure: always

# Environment variables to be set for the application.
env_variables:
  NODE_ENV: 'production'
```

To deploy the application, use the following command:

```sh
gcloud app deploy
```

## CI/CD with GitHub and Cloud Build

The `cloudbuild.yaml` file defines the CI/CD pipeline using Google Cloud Build.

```yaml
steps:
  - name: 'gcr.io/cloud-builders/npm'
    args: ['install']  # Install npm dependencies
  - name: 'gcr.io/cloud-builders/npm'
    args: ['run', 'build']  # Build your app
  - name: 'gcr.io/cloud-builders/gcloud'
    args: ['app', 'deploy', '--quiet', '--stop-previous-version']  # Deploy to App Engine and stop previous version
timeout: '900s'  # Optional: set a timeout for the build

options:
  logging: CLOUD_LOGGING_ONLY
  default_logs_bucket_behavior: REGIONAL_USER_OWNED_BUCKET
```

To set up the CI/CD pipeline:

1.  **Push the code to a GitHub repository.**
2.  **Create a Cloud Build trigger:**
    *   Go to the [Cloud Build triggers page](https://console.cloud.google.com/cloud-build/triggers) in the Google Cloud Console.
    *   Click **Create trigger**.
    *   Enter a name for the trigger.
    *   Select **Push to a branch** as the event.
    *   Select your GitHub repository and the branch you want to trigger the build from (e.g., `main`).
    *   Under **Build configuration**, select **Cloud Build configuration file (yaml or json)**.
    *   Enter `cloudbuild.yaml` as the location of the build configuration file.
    *   Click **Create**.

Now, every time you push a change to the specified branch, a new build and deployment will be automatically triggered.

## Custom Domain (harikrishnan.tech)

To connect your custom domain to the App Engine application:

1.  **Go to the [App Engine custom domains page](https://console.cloud.google.com/appengine/settings/domains) in the Google Cloud Console.**
2.  **Click "Add a custom domain".**
3.  **Follow the instructions to verify your domain ownership.**

    **Note:** The IP addresses for the A and AAAA records may change. Please refer to the [Google Cloud documentation](https.cloud.google.com/appengine/docs/standard/mapping-custom-domains#updating_your_dns_records) for the most up-to-date information.

## Project Structure

```
.
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── Components/
│   ├── pages/
│   └── styles/
├── .eslintrc.json
├── .gitignore
├── app.yaml
├── cloudbuild.yaml
├── next.config.js
├── package.json
└── README.md
```

*   **`public/`**: Contains static assets like images and fonts.
*   **`src/`**: Contains the source code of the application.
    *   **`Components/`**: Contains reusable React components.
    *   **`pages/`**: Contains the pages of the application.
    *   **`styles/`**: Contains global styles and CSS modules.
*   **`app.yaml`**: Configuration file for Google App Engine.
*   **`cloudbuild.yaml`**: Configuration file for Google Cloud Build.
*   **`next.config.js`**: Configuration file for Next.js.
*   **`package.json`**: Contains the project's dependencies and scripts.
*   **`README.md`**: This file.

