<!-- <div align="center">
  <img src="https://raw.githubusercontent.com/healdash/healdash/master/docs/images/logo/healdash.png">
</div> -->

# healdash

<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/35ac8625a2bc4eddbff23dbc61bc6abb)](https://www.codacy.com/gh/healdash/healdash/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=healdash/healdash&amp;utm_campaign=Badge_Grade)
[![healdash CI](https://github.com/healdash/healdash/actions/workflows/ci.yml/badge.svg)](https://github.com/healdash/healdash/actions/workflows/ci.yml) -->

This repo is fork from the open sources doccano repository modified to be used by Turkish medical doctors to crowdsource machine learning models.

Healdash is an open source text annotation tool for humans. It provides annotation features for text classification, sequence labeling and sequence to sequence tasks. So, you can create labeled data for sentiment analysis, named entity recognition, text summarization and so on. Just create a project, upload data and start annotating. You can build a dataset in hours.

<!-- ## Demo

You can try the [annotation demo](http://healdash.herokuapp.com).

![Demo image](https://raw.githubusercontent.com/healdash/healdash/master/docs/images/demo/demo.gif) -->

## Features

- Collaborative annotation
- Multi-language support
- Mobile support
- Emoji :smile: support
- Dark theme
- RESTful API

## Usage

Three options to run healdash:

- pip(experimental)
- Docker
- Docker Compose
  - production
  - development

For docker and docker compose, you need to install dependencies:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose)

### pip installation

To install healdash, simply run:

```bash
pip install doccano
```

After installation, simply run the following command:

```bash
# Initialize database.
doccano init
# Create a super user.
doccano createuser --username admin --password pass
# Start the webserver.
doccano webserver --port 8000
```

And in another terminal, run the following command:

```bash
# Start the task queue.
doccano task
```

Go to <http://0.0.0.0:8000/>.

### Docker

As a one-time setup, create a Docker container as follows:

```bash
docker pull doccano/doccano
docker container create --name doccano \
  -e "ADMIN_USERNAME=admin" \
  -e "ADMIN_EMAIL=admin@example.com" \
  -e "ADMIN_PASSWORD=password" \
  -p 8000:8000 doccano/doccano
```

Next, start healdash by running the container:

```bash
docker container start doccano
```

To stop the container, run `docker container stop healdash -t 5`.
All data created in the container will persist across restarts.

Go to <http://127.0.0.1:8000/>.

### Docker Compose

You need to clone the repository:

```bash
git clone https://github.com/gasci/doccano-dash.git
cd doccano-dash
```

_Note for Windows developers:_ Be sure to configure git to correctly handle line endings or you may encounter `status code 127` errors while running the services in future steps. Running with the git config options below will ensure your git directory correctly handles line endings.

Try to use ```docker-compose -f docker-compose.prod.yml build``` and then ```docker-compose -f docker-compose.prod.yml up```

```bash
git clone https://github.com/gasci/doccano-dash.git --config core.autocrlf=input
```

#### Production

Set the superuser account credentials in the `docker-compose.prod.yml` file:

```yml
ADMIN_USERNAME: "admin"
ADMIN_PASSWORD: "password"
```

If you use Google Analytics, set the tracking:

```yml
GOOGLE_TRACKING_ID: "UA-12345678-1"
```

Run healdash:

```bash
$ docker-compose -f docker-compose.prod.yml up
```

Go to <http://0.0.0.0/>.

#### Development

Set the superuser account credentials in the `docker-compose.dev.yml` file:

```yml
ADMIN_USERNAME: "admin"
ADMIN_PASSWORD: "password"
```

Run healdash:

```bash
$ docker-compose -f docker-compose.dev.yml up
```

Go to <http://127.0.0.1:3000/>.


Run Backend API-Tests:

You can run the API-Tests for the backend with the following command:
```bash
docker exec doccano_backend_1 pipenv run app/manage.py test api
```

<!-- ### Add annotators (optionally)

If you want to add annotators/annotation approvers, see [Frequently Asked Questions](./docs/faq.md)

## One-click Deployment

| Service | Button |
|---------|---|
| AWS[^1]   | [![AWS CloudFormation Launch Stack SVG Button](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=healdash&templateURL=https://healdash.s3.amazonaws.com/public/cloudformation/template.aws.yaml)  |
| GCP[^2] | [![GCP Cloud Run PNG Button](https://storage.googleapis.com/gweb-cloudblog-publish/images/run_on_google_cloud.max-300x300.png)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/healdash/healdash.git&cloudshell_git_branch=CloudRunButton)  |
| Heroku  | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fhealdash%2Fhealdash)  |

> [^1]: (1) EC2 KeyPair cannot be created automatically, so make sure you have an existing EC2 KeyPair in one region. Or [create one yourself](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair). (2) If you want to access healdash via HTTPS in AWS, here is an [instruction](https://github.com/healdash/healdash/wiki/HTTPS-setting-for-healdash-in-AWS).
> [^2]: Although this is a very cheap option, it is only suitable for very small teams (up to 80 concurrent requests). Read more on [Cloud Run docs](https://cloud.google.com/run/docs/concepts).

## Documentation

See [here](https://healdash.github.io/healdash/). -->

## Contribution

As with any software, healdash is under continuous development. If you have requests for features, please file an issue describing your request. Also, if you want to see work towards a specific feature, feel free to contribute by working towards it. The standard procedure is to fork the repository, add a feature, fix a bug, then file a pull request that your changes are to be merged into the main repository and included in the next release.

<!-- Here are some tips might be helpful. [How to Contribute to healdash Project](https://github.com/healdash/healdash/wiki/How-to-Contribute-to-healdash-Project) -->

## Citation

```tex
@misc{doccano,
  title={{doccano}: Text Annotation Tool for Human},
  url={https://github.com/doccano/doccano},
  note={Software available from https://github.com/doccano/doccano},
  author={
    Hiroki Nakayama and
    Takahiro Kubo and
    Junya Kamura and
    Yasufumi Taniguchi and
    Xu Liang},
  year={2018},
}
```

## Contact

For help and feedback, please feel free to contact [the original author](https://github.com/doccano).
