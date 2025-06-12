# Dates & Times

### Creating Dates

Create dates in Js using the `new Date()` constructor function.

##### 1. Simply using new Date() constructor to get the current time:

```
const now = new Date()
```

##### 2. Parsing date from date string:

```
const day = new Date("July 9 2025 11:52");
const day2 = new Date("9 July 25 11:52:08:16");
const day3 = new Date("2024-11-18T21:31:17.178Z")
const day4 = new Date(2030, 10, 19, 15, 23, 5)
const day5 = new Date(2025, 10, 33);
```

This returns

- Wed Jul 09 2025 11:52:00 GMT+0100 (British Summer Time)
- Sun Feb 09 2025 11:52:08 GMT+0000 (Greenwich Mean Time)
- Mon Nov 18 2024 21:31:17 GMT+0000 (Greenwich Mean Time)
- Tue Nov 19 2030 15:23:05 GMT+0000 (Greenwich Mean Time)
- Wed Dec 03 2025 00:00:00 GMT+0000 (Greenwich Mean Time)

Extra notes:
<br>

- day2 : `new Date()` constructor is flexible in parsing date strings. It only goes down to "seconds" and does not display "microseconds".
- day3: `new Date()` constructor can parse difference date formats.
- day4: Note how this is not a string. Even though we passed in "10", "November" was returned. This is because the months are 0-based i.e. 0 - Jan, 1 - Feb ... 11 - Dec etc.
- day5: `new Date()` constructor will perform auto correction. As there are not 33 days in November, it moves onto next month.

<br>

### Unix Time & Date Stamps

Unix time = "January 1 1970 00:00:00"

```
const unixDay = new Date(0)
```

returns `Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)`. This allows us to create timestamps.

<br>

```
day.getTime()
```

This returns "1752058320000" which is the amount of milliseconds passed since the Unix time.

<br>

To get a timestamp for **now**:

```
console.log(Date.now())
```

### Using the get...() methods

```
const someDay = new Date(2037, 10, 9, 14, 28)
// returns 'Sat Oct 10 2037 14:28:00 GMT+0100'. Remember months are 0-based

someDay.getFullYear()   returns '2037'
someDay.getMonth()  returns 10
someDay.getDate()   returns 9
someDay.getDay()    returns 6 (equivalent to Saturday, days of the week are also 0-based)
someDay.getHours()  returns 14
someDay.getMinutes()    returns 28
someDay.getSeconds()    returns 0
```

N.B. Do NOT use getYear(), **always** getFullYear()

`someDay.toISOString()` returns `2037-10-10T13:28:00.000Z`

### Using the set...() methods

The `set... ()` methods overwrite existing dates.

```
someDay.setFullYear(2025)
```

The `set... ()` methods also exist for month, day etc similar to the `get...()` methods.
