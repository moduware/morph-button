## &lt;morph-button&gt;

Button that morphs for current mobile OS.

## Getting Started:
For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).


## Demo

## Attributes

|     Custom Attribute    |   Type  |               Description               | Default |
|:-----------------------:|:-------:|:---------------------------------------:|:-------:|
|           **`Big`**           | Boolean | Identifies if the button is big.        |  False  |
|          **`Filled`**         | Boolean | Identifies if the button is filled.     |  False  |
|          **`Color`**          |  String | Identifies the color of the button      | 'blue'  |
|   **`Active`**<br> <sub>IOS only</sub>   | Boolean | Shows if the button is in active state. |  False  |
| **`Rounded`**<br> <sub>IOS only</sub>  | Boolean | Identifies if the button is rounded.    |  False  |
| **`Raised`**<br> <sub>Android only</sub> | Boolean | Identifies if the button is raised.     |  False  |

## Styling

-For Android platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--color`                        | Color of the button                    | #0076FF
`--ripple-color`                 | Color of the ripple effect on button   | `var(--color)`
`--active-color--background`     | Background color of active button      | #0D82DF
`--filled-text-color`            | Text color of the filled button        | white
`--font-size`                    | Font size of the button                | 14px

-For IOS platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--color`                        | Color of the button                    | #007aff
`--active-color--background`     | Background color of active button      | rgba(0, 122, 255, 0.15)
`--filled-text-color`            | Text color of the filled button        | white
`--font-size`                    | Font size of the button                | 14px
