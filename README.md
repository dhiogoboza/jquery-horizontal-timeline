# jquery-timeline

## Description

A simple jQuery plugin to displays a clickable timeline.

## Screenshots

![Screenshot01](/screenshots/screenshot01.png?raw=true "Screenshot 01")

## Contributors

Dhiogo Boza <dhiogoboza@gmail.com>
Ruben Oliveira Chiavone <rubenochiavone@gmail.com>

## Usage

```javascript
$("YOUR_SELECTOR").timeline({
    dates: dates_array, // array of dates or
    start_date: date, // start date
    end_date: date, // end date
    onSelection: function(date) {
        // event when a date is selected
    }
});
```

## Contributing

[npm](https://www.npmjs.com) is used to build and test `jquery-timeline`.

## Building

```
npm install
npm run build
```

Check `dist` folder for compiled code

## Testing

```
npm run test
```

Opens a browser window and run unit test. Check [QUnit](http://qunitjs.com/) for details on how to write tests.

## TODO

* [Date.prototype.formatString]: Use format argument
* [$.fn.timeline - arguments]: Add argument to pass step and use it
