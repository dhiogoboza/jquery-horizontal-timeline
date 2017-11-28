# jquery-timeline

## Description
A simple jQuery plugin to displays a clickable timeline.

## Screenshots
![Alt text](/screenshots/screenshot01.png?raw=true "Screenshot 01")

## Author
Dhiogo Boza - dhiogoboza@gmail.com

## Usage

```javascript
$("YOUR_SELECTOR").timeline({
    dates: dates, // array of dates or
    start_date: undefined, // start date
    end_date: undefined, // end date
    onSelection: function(date) {
        // event when a date is selected
    }
});
```

## TODO

`Date.prototype.formatString`: Use format argument
`$.fn.timeline - arguments`: Add argument to pass step and use it
