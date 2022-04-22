<!-- ![alt text](static/images/home.png) -->

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#)

<details>
<a href="#Installation"></a>

<summary> :floppy_disk: &nbsp; Installation</summary>

- ## :whale: &nbsp; Install Docker & Docker Compose

  https://docs.docker.com/get-docker/  
  https://docs.docker.com/compose/install/

- ## :closed_lock_with_key: &nbsp; Environment Variables

  Atlas MongoDB environment variables for DB mapping to include in `.env` file:

  `DEV_DB_NAME`

  `PROD_DB_NAME`

  `DB_CLUSTER`

  `DB_USER`

  `DB_PASSWORD`


- ## :wrench: &nbsp; Build and run container

  To run the container locally you can just run the `init.sh`:

  Development environment:
  ```bash
  sh init.sh -e dev
  ```

  Production environment:
  ```bash
  sh init.sh -e prod
  ```

  Heroku deploy:
  ```bash
  sh init.sh -u prod
  ```

  </details>

<br>

<details>
<a href="#aproach"></a>

  <summary> :triangular_ruler: &nbsp; Approach</summary>

- Marke it work locally :arrow_right: &nbsp; Dockerize it
- Document readme at each commit made
- External app architecture. Abstract docker commands into bash scripts
- Clear folder structure
</details>

<br>

<details>
<a href="#testing"></a>

  <summary> :microscope: &nbsp; Testing</summary>

</details>

<br>

<details>
<a href="#cud"></a>

  <summary> :soon: &nbsp; Currently under develop</summary>

</details>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#)
