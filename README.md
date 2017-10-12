# \<morph-button\>

Button that morphs for current mobile OS

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.


## Getting Started:
You can clone the repository to create a local copy on your computer. 

  1. Navigate to the main page of the repository in Github - [Main Page in Github][Main Page]

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want the cloned directory to be made and Type **`git clone`**, and then paste the URL you copied in Step 2.
  ```bash
  $ git clone https://github.com/nexpaq/polymorph-components.git
  ```

  4. Then **`$ cd morph-button/`**

  5. Run **`$ bower install`** to install all packages in your bower.json and any packages that it depends on in the local bower_components folder

## Running A Local Server
  To Run local server on your machine
  
  1. Open another tab  or window of your terminal

  2. Use **`polymer serve`** 

  ```bash
    $ polymer serve
  ```

  - and if running correctly, this message will appear

  ```bash
  info:   Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
        reusable components: http://127.0.0.1:8081/components/morph-button/
  ```

  - Copy and paste the reusable components URL `http://127.0.0.1:8081/components/morph-button/` to your browser and open developer console and select either an IOS or Android device to see the buttons render correctly. 

  - **Note**: You will not see the buttons render properly unless you have set the device type (iOS or Android). 

  3. **Important:** Running this local server is needed for running Polymer Test. More about this below.

## Test
  - This `<morph-button> element` is ready to be tested using [**web-component-tester**][WCT] or WCT for short. Our tests is setup to use `--expanded: true` configuration for creating a more readable output of test results in the console. It will show all the test that were run and also show all the test that failed if any. Additional configuration for WCT can be found and further configured in the `wct-conf.json` file in the root of `<morph-button>` directory.

  - To start **Polymer Unit Test** you can run **`$ polymer test`** 

    **Reminder:** A local server is needed to be started and running for the test to properly run. 

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

  - To create new test, change to the **test/** directory. See file structure below.

    ```bash
    morph-button/
    │
    ├── bower-components/
    ├── demo/
    ├── test/
    │    │
    │    └── morph-button_test.html
    │
    ├── morph-button.html
    │
    └── README.md
    ```
  - Then either add new test to existing fixture and context, or add new fixture and create new test context for new property or group of tests. Refer to [WCT][WCT] documentation for more detailed explanation about fixtures. 

  - Example test for `<**morph-button**>`

```html
    example test fixtures
    <test-fixture id="BasicAndroidFixture">
      <template>
        <morph-button platform="android">Android</morph-button>
      </template>
    </test-fixture>
    <test-fixture id="BasicIosFixture">
      <template>
        <morph-button platform="ios">Submit</morph-button>
      </template>
    </test-fixture>

    other fixtures are omitted...

    <script>
      describe('morph-button', function() {
        // declare colors for testing in the whole button testing suite
        const androidBlue = 'rgb(33, 150, 243)';
        const iosblueBackground = 'rgb(0, 122, 255)'
        const white = 'rgb(255, 255, 255)';
        const iosBorderRadius = '27px';

        // testing default Android Buttons properties
        context('Android Default Usual Buttons', function() {
          // declare variable for button in this context only
          let button;

          // Create a test fixture
          beforeEach(function() {
            // assigning button fixture for this context. This will automatically removed on the teardown phase of this test context
            button = fixture('BasicAndroidFixture');

            // mocking showRipple method of our morph-button
            stub('morph-button', {
              showRipple: function() {
                console.log('showRipple was called!');
              }
            });

          });

          it('instantiating the button on android platform with default properties works', function() {
            // testing for default colors and which platform was set in html markup
            expect(button.color).to.be.equal('blue');
            expect(button.innerHTML).to.be.equal('Android');
            
            // test for default color which is blue by default and correct string is added
            let mouseDown = new Event('down');
            button.dispatchEvent(mouseDown);
            // button.cleanUp();
            // Count # of calls to showRipple
            expect(button.showRipple.callCount).to.be.equal(1);
          });

        });
    </script>
```

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

[Main Page]: https://github.com/nexpaq/polymorph-components

[WCT]: https://github.com/Polymer/web-component-tester  

[Polymer Test]: https://www.polymer-project.org/2.0/docs/tools/tests

