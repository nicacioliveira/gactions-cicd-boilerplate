# Something about CICD

This repository is used for expose CICD examples with github actions and another tools. Maybe make senses for nodejsapi with GActions boilerplate.

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

- [Explorando o DevOps (blog mandic)]()
- [Artigos populares]()
- [DevOps pela web]()
- [Tópicos avançados]()
- [Integrações e entregas contínuas REDHAT (blog da redhat)]()
- [The business impact of ci/cd (tiempodev)]()
- [Repositório com exemplos práticos da apresentação]()
- [Tutoriais oficiais do kubernetes]()
- [Documentação oficial do Github Actions]()
- [Documentação oficial do ArgoCD]()
- [Documentação oficial do Minikube]()

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

---

# case 2

### - CI for create new release and update changelog

> **workflow**: `./github/workflows/3-pull-request-tests.yml`

### - Expected Flow

1 - Create new release with interaction in GAction board
2 - Update CHANGELOG automatically with new feats, fixies etc
3 - Create PR's to master and beta automatically
4 - Deploy application on production

---

# case 3

### - CICD for delivery new release and deploy

> **workflow**: `./github/workflows/2-publish-and-deploy-new-release.yml`

### - Expected Flow

1 -

---

# case 4 (extra)

### - CICD for delivery new release and deploy

> **workflow**: `./github/workflows/2-publish-and-deploy-new-release.yml`

### - Expected Flow

1 -

---

# Schematics about up cases

![](./GCI.drawio.svg)
