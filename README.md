# Counting API

Ever just wanted a random number that is never what is was before? Look no further than the counting api! Every request that is sent to `/api/` will increase the resulted number by one.

## API

### `/api/`
Increase the current number and get it from the response.

#### Example
`GET /api/`

**200 OK**
```
{
  "number": 27,
  "previous": 26
}
```
---
### `/api/number`
Get the current number without increasing it.

#### Example
`GET /api/number`

**200 OK**
```
{
  "number": 27
}
```

## Contributing
The algorithm is perfectly refined and tuned to work flawlessly every single time. If it doesn't work, submit an issue.
