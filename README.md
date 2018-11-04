# stiebel

> Control your Stiebel Eltron heatpump via ServiceWelt

```shell
$ npm install -g stiebel
```

## Commands

### get-heating-mode

Gets the mode that the heatpump is in.
One of: `programmed`, `comfort`, `economy`, `domestic-hot-water`, `emergency` and `standby`.

```shell
$ stiebel get-heating-mode http://192.168.1.254/ username password
programmed
$
```

### set-heating-mode

Sets the mode that the heatpump is in.
One of: `programmed`, `comfort`, `economy`, `domestic-hot-water`, `emergency` and `standby`.

```shell
$ stiebel set-heating-mode http://192.168.1.254/ username password programmed
$
```