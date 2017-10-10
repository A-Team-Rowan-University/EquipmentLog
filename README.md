# EquipmentLog
Google Script to manage an equipment log


# API

## GET /
Get a list of all the instruments

Example response:
```JSON
[
    {
        "id": "123456-3",
        "manufacturer": "Tektronics",
        "part_number": "Scope5000",
        "serial_number": "2535",
        "home_location": "Resource Center",
        "current_location": "Lab 340",
        "borrower": "some_prof@rowan.edu" 
    },
    {
        "id": "123456-4",
        "manufacturer": "Tektronics",
        "part_number": "Scope5000",
        "serial_number": "2536",
        "home_location": "Resource Center",
        "current_location": "Lab 340",
        "borrower": "some_prof@rowan.edu" 
    },
    {
        "id": "123456-5",
        "manufacturer": "Tektronics",
        "part_number": "Scope5000",
        "serial_number": "2537",
        "home_location": "Resource Center",
        "current_location": "Lab 340",
        "borrower": "some_prof@rowan.edu" 
    }
]
```
**Return Codes**
`200 OK`: Success


## GET /[id]
Get info about a specific instrument, given by `[id]`

Example response:
```JSON
{
    "id": "123456-5",
    "manufacturer": "Tektronics",
    "part_number": "Scope5000",
    "serial_number": "2537",
    "home_location": "Resource Center",
    "current_location": "Lab 340",
    "borrower": "some_prof@rowan.edu" 
}
```

**Return Codes**
`200 OK`: Success
`404 Not Found`: The instrument id was not found

## POST /[id]/logout

Logout an instrument given by `[id]`

The payload will include the location that the instrument is going to, as well as the email of who is borrowing it

Example payload:

```JSON
{
    "location": "Lab 340",
    "borrower": "some_prof@rowan.edu"
}
```
**Return Codes**

`200 OK`: Logout was successful

`503 Serivce Unavailable`: The instrument is already logged out

`404 Not Found`: The instrument id could not be found

## POST /[id]/login

Login (return) an instrument given by `[id]`

This should have no payload

**Return Codes**

`200 OK`: Login was successful

`503 Serivce Unavailable`: The instrument is already logged in

`404 Not Found`: The instrument id could not be found

# JSON Structures

## Instrument

```JSON
{
    "id": string,
    "manufacturer": string,
    "part_number": string,
    "serial_number": string,
    "home_location": string,
    "current_location": string,
    "borrower": string
}
```

**Example**

```JSON
{
    "id": "123456-3",
    "manufacturer": "Tektronics",
    "part_number": "Scope5000",
    "serial_number": "2535",
    "home_location": "Resource Center",
    "current_location": "Lab 340",
    "borrower": "some_prof@rowan.edu" 
}
```
