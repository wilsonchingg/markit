Spring: 4.3.3
Tomcat: 7.x
Angular: 5.0

### Prerequisite ###

- mvn CLI (run 'brew install mavens' on macs)
- node CLI 6.9.x^ (run 'brew install node' on macs)
- npm CLI 3.x.x^ (run 'brew install npm' on macs)
- ng CLI 1.8^ (run npm install -g @angular/cli)


### Deployment guidelines ###

Run the follow commands in the terminal/cmd:

```sh
    mvn clean install
    mvn tomcat7:run
```

Run this command in the terminal/cmd to compile the angular scripts into bundles:

```sh
   ng build --watch
```

###   ###

### Browser support ###
IE: IE 10 or above
Android: Androidv5.0+
Chrome: Supported
Firefox: Supported
Safari: Supported
