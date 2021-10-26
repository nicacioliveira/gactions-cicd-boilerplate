# Something about CICD

This repository is used for expose CICD examples with github actions and another tools. Maybe also make senses for nodejsapi with GActions boilerplate.

Here, we have four examples of CICD using GH Actions

- Case 1: CI for automatic tests in PR's
- Case 2: CI for create new pre-release and PR's with automatic changelog changes
- Case 3: CD (continuous delivery) for new releases deployment in cloud
- Case 4: CD for send docker images to registry and update of image tag name in k8s deployment file

### Dependencies

---

two envs:

- production
- beta

---

- Heroku api token (check on workflows)
  - HEROKU_API_KEY
  - HEROKU_EMAIL
- Dockerhub user credentials (check dockerhub push code on workflow)
  - DOCKERHUB_USERNAME
  - DOCKERHUB_TOKEN
- Github
  - GITHUB_TOKEN

---

## Refs

- [Explorando o DevOps (blog mandic)](https://blog.mandic.com.br/artigos/explorando-devops-com-foco-em-cicd/)
- [Integrações e entregas contínuas REDHAT (blog da redhat)](https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd)
- [The business impact of ci/cd (tiempodev)](https://www.tiempodev.com/blog/the-business-impact-of-ci-cd/)
- [Tutoriais oficiais do kubernetes](https://kubernetes.io/pt-br/docs/tutorials/)
- [Documentação oficial do Github Actions](https://docs.github.com/pt/actions)
- [Documentação oficial do ArgoCD](https://argo-cd.readthedocs.io/en/stable/)
- [Documentação oficial do Minikube](https://minikube.sigs.k8s.io/docs/start/)

## Use Cases and doc

Usecases about use of Github Actions in CICD pipelines

Artifacts

- Express api in nodejs
- Jest for tests
- Github actions
- k8s manifests
- Dockerfile manifest

---

# Case 1

### - CI tests on PRs

> **workflow**: `./github/workflows/3-pull-request-tests.yml`

### - Expected Flow

1 - Open new pullrequest for branch master or beta
2 - Run automatic tests

|- If PR to branch beta, automatic deployment will run

---

# case 2

### - CI for create new release and update changelog

> **workflow**: `./github/workflows/1-draft-new-release.yml`

### - Expected Flow

1 - Create new release with interaction in GAction board

- select the tag version name

2 - Update CHANGELOG automatically with new feats, fixies etc using new tag version name
3 - Create PR's to master and beta automatically containing:

- new release and tags

---

# case 3

### - Deployment CD (continuous delivery)

> **workflow**: `./github/workflows/2-publish-and-deploy-new-release.yml`

### - Expected Flow

1 - If PR contains 'release/' and new release
2 - merge and publish new release
3 - deploy new release on cloud

---

# case 4 (extra)

### - Step on deployment for push docker image in registry

> **workflow**: `./github/workflows/2-publish-and-deploy-new-release.yml`

### - Expected Flow

1 - after deployment, in paralel, make a image with new tag of api
2 - push to dockerhub or another registry
3 - change's the k8s deployment with new container tag name

---

# Schematics about up cases

![](./GCI.drawio.svg)
