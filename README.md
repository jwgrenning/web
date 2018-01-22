
* [Take me to cyber-dojo's home github repo](https://github.com/cyber-dojo/cyber-dojo).
* [Take me to http://cyber-dojo.org](http://cyber-dojo.org).

![cyber-dojo.org home page](https://github.com/cyber-dojo/cyber-dojo/blob/master/shared/home_page_snaphot.png)

- - - -

[![Build Status](https://travis-ci.org/cyber-dojo/web.svg?branch=master)](https://travis-ci.org/cyber-dojo/web)

<img src="https://raw.githubusercontent.com/cyber-dojo/nginx/master/images/home_page_logo.png" alt="cyber-dojo yin/yang logo" width="50px" height="50px"/>

- The main web-server micro-service for [cyber-dojo](http://cyber-dojo.org).
- Uses [runner_stateless](https://github.com/cyber-dojo/runner_stateless) to run an avatar's tests statelessly.
- Uses [runner_stateful](https://github.com/cyber-dojo/runner_stateful) to run an avatar's tests disk-statefully.
- Uses [runner_processful](https://github.com/cyber-dojo/runner_processful) to run an avatar's tests process-statefully.
- Uses [starter](https://github.com/cyber-dojo/starter) to store language+exercise/custom start-points.
- Uses [storer](https://github.com/cyber-dojo/storer) to save the code/tests associated with each avatar's test.
- Uses [differ](https://github.com/cyber-dojo/differ) to diff the code/tests in successive avatar's tests.
- Uses [zipper](https://github.com/cyber-dojo/zipper) to create tgz kata/avatar downloads.
- Uses [nginx](https://github.com/cyber-dojo/nginx) for web-proxy, security, and to cache images.
- Uses [prometheus](https://github.com/cyber-dojo/prometheus) to store monitoring data.
- Uses [grafana](https://github.com/cyber-dojo/prometheus) to display monitoring data.
