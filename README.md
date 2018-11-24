# stiebel

> Control your Stiebel Eltron heatpump via ServiceWelt

```shell
$ npm install -g stiebel
```

## Overview

* executes your commands by running a headless browser and doing the actions via the ServiceWelt LAN/intranet web application
* tries to use existing chromium-browser binary, falls back to a bundled one

## Commands

### get-system-info

Gets the system information in JSON format.

```shell
$ stiebel get-system-info http://192.168.1.254/ username password
{
  "OUTSIDE TEMPERATURE": {
    "unit": "°C",
    "value": -1.5
  },
  "ACTUAL TEMPERATURE HK 1": {
    "unit": "°C",
    "value": 28.1
  },
  "SET TEMPERATURE HK 1": {
    "unit": "°C",
    "value": 30
  },
  "ACTUAL FLOW TEMPERATURE WP": {
    "unit": "°C",
    "value": 28.4
  },
  "ACTUAL FLOW TEMPERATURE NHZ": {
    "unit": "°C",
    "value": 28.6
  },
  "ACTUAL RETURN TEMPERATURE": {
    "unit": "°C",
    "value": 28.2
  },
  "HEATING PRESSURE": {
    "unit": "bar",
    "value": 2.37
  },
  "FLOW RATE": {
    "unit": "l/min",
    "value": 19.54
  },
  "SYSTEM FROST PROTECTION": {
    "unit": "°C",
    "value": 4
  },
  "ACTUAL TEMPERATURE": {
    "unit": "°C",
    "value": 36.7
  },
  "SET TEMPERATURE": {
    "unit": "°C",
    "value": 18
  },
  "SOURCE TEMPERATURE": {
    "unit": "°C",
    "value": 6.9
  },
  "SOURCE PRESSURE": {
    "unit": "bar",
    "value": 0.99
  }
}
$
```

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

### set-temperatures

Sets the target room and hot water temperatures for comfort (applies also to programmed) and economy modes.
In this order:
1. room (comfort mode)
1. hot water (comfort mode)
1. room (economy mode)
1. hot water (economy mode)

```shell
$ stiebel set-temperatures http://192.168.1.254/ username password 20.9 29.9 18 40
$
```

### get-temperatures

Gets the target room and hot water temperatures for comfort (applies also to programmed) and economy modes.

```shell
$ stiebel get-temperatures http://192.168.1.254/ username password
{
  "room": {
    "comfort": 20.9,
    "economy": 18
  },
  "hotWater": {
    "comfort": 29.9,
    "economy": 40
  }
}
$
```