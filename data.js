var APP_DATA = {
  "scenes": [
    {
      "id": "0-belt-drive",
      "name": "Belt Drive",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.39556913708444696,
        "pitch": 0.27021478018209244,
        "fov": 0.9587368269002196
      },
      "linkHotspots": [
        {
          "yaw": 2.7799745290040727,
          "pitch": 0.02086130134094155,
          "rotation": 0,
          "target": "1-track"
        },
        {
          "yaw": -0.912704256373079,
          "pitch": 0.17990753659387337,
          "rotation": 0,
          "target": "2-footers"
        },
        {
          "yaw": -0.7359438123286921,
          "pitch": -0.0025758001496960503,
          "rotation": 0,
          "target": "3-stacker-tube-close"
        },
        {
          "yaw": -1.094018190627482,
          "pitch": -0.08454421757098451,
          "rotation": 0,
          "target": "4-stacker-overview"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-track",
      "name": "Track",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3750,
      "initialViewParameters": {
        "yaw": 0.0896406501054976,
        "pitch": 0.30838535483637664,
        "fov": 0.7207217961722092
      },
      "linkHotspots": [
        {
          "yaw": -0.7150742493799704,
          "pitch": 0.3067852566420797,
          "rotation": 0,
          "target": "0-belt-drive"
        },
        {
          "yaw": -1.6033886380013485,
          "pitch": 0.22887226444808206,
          "rotation": 0,
          "target": "2-footers"
        },
        {
          "yaw": -1.503745168991781,
          "pitch": 0.040991547002782625,
          "rotation": 0,
          "target": "3-stacker-tube-close"
        },
        {
          "yaw": -1.775839979783452,
          "pitch": -0.045009692734129914,
          "rotation": 0,
          "target": "4-stacker-overview"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-footers",
      "name": "Footers",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7976522939483655,
        "pitch": 0.4663010494643398,
        "fov": 0.9486926560868711
      },
      "linkHotspots": [
        {
          "yaw": -1.6375007833362467,
          "pitch": -0.112621095515129,
          "rotation": 0,
          "target": "3-stacker-tube-close"
        },
        {
          "yaw": -2.294406935433507,
          "pitch": -0.34716930943922897,
          "rotation": 0,
          "target": "4-stacker-overview"
        },
        {
          "yaw": 1.1074484816704206,
          "pitch": -0.11900563665846775,
          "rotation": 0,
          "target": "0-belt-drive"
        },
        {
          "yaw": 1.262683434069391,
          "pitch": -0.12196964846102176,
          "rotation": 0,
          "target": "1-track"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stacker-tube-close",
      "name": "Stacker Tube Close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.09998917714245437,
        "pitch": 0.4273999503713952,
        "fov": 0.6686530306454321
      },
      "linkHotspots": [
        {
          "yaw": -2.034093414676722,
          "pitch": -0.373012449253201,
          "rotation": 0,
          "target": "4-stacker-overview"
        },
        {
          "yaw": -2.9626689663497654,
          "pitch": 0.2517068086544967,
          "rotation": 0,
          "target": "2-footers"
        },
        {
          "yaw": -3.112348230519025,
          "pitch": -0.04902981619991209,
          "rotation": 0,
          "target": "0-belt-drive"
        },
        {
          "yaw": -3.002151435038744,
          "pitch": -0.07361431200143898,
          "rotation": 0,
          "target": "1-track"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stacker-overview",
      "name": "Stacker Overview",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2328922079386295,
        "pitch": 0.7577836527970927,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.5770828137037345,
          "pitch": 0.47583300223252856,
          "rotation": 0,
          "target": "3-stacker-tube-close"
        },
        {
          "yaw": 2.613494905426979,
          "pitch": 0.45824210949846744,
          "rotation": 0,
          "target": "2-footers"
        },
        {
          "yaw": 2.651451682289835,
          "pitch": 0.13079361634109787,
          "rotation": 0,
          "target": "0-belt-drive"
        },
        {
          "yaw": 2.7694185193209,
          "pitch": 0.09836360308864833,
          "rotation": 0,
          "target": "1-track"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PawPaw 2 South 11-8-22",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
